import { Component, signal } from '@angular/core';
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
  // Signals: el next del subscribe corre fuera de cualquier evento de template,
  // así que en esta app zoneless (sin zone.js) solo un signal fuerza el repintado.
  datos = signal<NumeroProcesado[]>([]);
  suscripto = signal(false);

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
    if (this.suscripto()) return;

    this.suscripto.set(true);
    this.datos.set([]);
    this.subscription = this.numeroProcesado$.subscribe({
      next: (val) => this.datos.update((lista) => [...lista, val]),
    });
  }

  detener() {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.suscripto.set(false);
  }
}
