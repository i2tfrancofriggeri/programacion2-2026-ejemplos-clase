import { Component } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

interface NumeroProcesado {
  original: number;
  duplicado: number;
  texto: string;
}

@Component({
  selector: 'app-pipe-map-demo',
  imports: [],
  templateUrl: './pipe-map-demo.html',
  styleUrl: './pipe-map-demo.css',
})
export class PipeMapDemo {
  datos: NumeroProcesado[] = [];
  suscripto = false;

  private numero$ = interval(1000);

  private numeroProcesado$ = this.numero$.pipe(
    map((valor): NumeroProcesado => ({
      original: valor,
      duplicado: valor * 2,
      texto: `El valor emitido fue ${valor}`,
    })),
  );

  private subscription: Subscription | null = null;

  iniciar() {
    if (this.suscripto) return;

    this.suscripto = true;
    this.datos = [];
    this.subscription = this.numeroProcesado$.subscribe({
      next: (val) => this.datos.push(val),
    });
  }

  detener() {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.suscripto = false;
  }
}
