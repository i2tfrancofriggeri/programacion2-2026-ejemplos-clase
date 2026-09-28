import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-promesa-vs-observable',
  imports: [],
  templateUrl: './promesa-vs-observable.html',
  styleUrl: './promesa-vs-observable.css',
})
export class PromesaVsObservable {
  resultadoPromesa: string[] = [];
  resultadoObservable: string[] = [];

  pedirConPromesa() {
    this.resultadoPromesa = [];

    // Una promesa resuelve una sola vez: no hay forma de que "emita" un segundo valor
    this.simularPeticion().then((valor) => this.resultadoPromesa.push(valor));
  }

  pedirConObservable() {
    this.resultadoObservable = [];

    // take(3) corta el observable después de 3 emisiones (interval nunca completa solo)
    interval(500)
      .pipe(take(3))
      .subscribe({
        next: (valor) => this.resultadoObservable.push(`Valor emitido: ${valor}`),
        complete: () => this.resultadoObservable.push('(completado)'),
      });
  }

  private simularPeticion(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Un único valor, una sola vez'), 500);
    });
  }
}
