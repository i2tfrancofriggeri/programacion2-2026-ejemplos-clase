import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DetallePokemon, Pokemon } from '../pokemon';

@Component({
  selector: 'app-detalle-anidado',
  imports: [],
  templateUrl: './detalle-anidado.html',
  styleUrl: './detalle-anidado.css',
})
export class DetalleAnidado {
  private pokemonService = inject(Pokemon);

  seleccionado = signal<string | null>(null);
  detalle = signal<DetallePokemon | null>(null);

  constructor() {
    // ❌ Evitar: un subscribe() dentro de otro subscribe().
    // Cada selección lanza una petición nueva sin cancelar la anterior, y como
    // obtenerDetalleConDemora() tarda entre 0 y 2 s al azar, las respuestas pueden
    // llegar desordenadas: gana la ÚLTIMA EN LLEGAR, no la última pedida.
    this.pokemonService.seleccionado$.pipe(takeUntilDestroyed()).subscribe((nombre) => {
      this.seleccionado.set(nombre);
      if (nombre) {
        this.pokemonService
          .obtenerDetalleConDemora(nombre)
          .subscribe((detalle) => this.detalle.set(detalle));
      }
    });
  }
}
