import { Component, signal } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-promesa-vs-observable',
  imports: [],
  templateUrl: './promesa-vs-observable.html',
  styleUrl: './promesa-vs-observable.css',
})
export class PromesaVsObservable {
  // Signals: then()/next() de acá resuelven después del click que los disparó,
  // así que en esta app zoneless (sin zone.js) solo un signal fuerza el repintado.
  resultadoPromesa = signal<string[]>([]);
  resultadoObservable = signal<string[]>([]);

  pedirConPromesa() {
    this.resultadoPromesa.set([]);

    // Una promesa resuelve una sola vez: no hay forma de que "emita" un segundo valor
    this.simularPeticion().then((valor) =>
      this.resultadoPromesa.update((lista) => [...lista, valor]),
    );
  }

  pedirConObservable() {
    this.resultadoObservable.set([]);

    // take(3) corta el observable después de 3 emisiones (interval nunca completa solo)
    interval(500)
      .pipe(take(3))
      .subscribe({
        next: (valor) =>
          this.resultadoObservable.update((lista) => [...lista, `Valor emitido: ${valor}`]),
        complete: () => this.resultadoObservable.update((lista) => [...lista, '(completado)']),
      });
  }

  private simularPeticion(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Un único valor, una sola vez'), 500);
    });
  }
}
