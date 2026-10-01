import { Component, inject, signal } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-observables-http',
  imports: [],
  templateUrl: './observables-http.html',
  styleUrl: './observables-http.css',
})
export class ObservablesHttp {
  private pokemonService = inject(Pokemon);
  log = signal<string[]>([]);

  private agregarLog(texto: string) {
    this.log.update((lineas) => [...lineas, texto]);
  }

  // 1. Frío: sin subscribe() la petición nunca sale (mirar la pestaña Network)
  llamarSinSubscribe() {
    this.pokemonService.obtenerDetalle('pikachu');
    this.agregarLog('Llamé a obtenerDetalle() sin subscribe(): en Network no aparece nada');
  }

  // 1. Cada subscribe() dispara una petición nueva
  llamarDosVeces() {
    const detalle$ = this.pokemonService.obtenerDetalle('pikachu');
    detalle$.subscribe(() => this.agregarLog('Llegó la respuesta del subscribe() 1'));
    detalle$.subscribe(() => this.agregarLog('Llegó la respuesta del subscribe() 2'));
    this.agregarLog('Me suscribí 2 veces al mismo Observable: en Network salen 2 peticiones');
  }

  // 2. Emite un solo valor y completa
  verComplete() {
    this.pokemonService.obtenerDetalle('pikachu').subscribe({
      next: (detalle) => this.agregarLog(`next: llegó ${detalle.name}`),
      complete: () => this.agregarLog('complete: la petición terminó sola, sin unsubscribe()'),
    });
  }

  // 3. Desuscribirse antes de que llegue la respuesta cancela la petición
  pedirYCancelar() {
    const subscription = this.pokemonService
      .obtenerDetalle('charizard')
      .subscribe(() => this.agregarLog('Esto no debería aparecer'));
    setTimeout(() => {
      subscription.unsubscribe();
      this.agregarLog('Me desuscribí a los 5 ms: en Network la petición figura como (canceled)');
    }, 5);
  }
}
