import { Component, OnDestroy, signal } from '@angular/core';
import { interval, share, Subscription } from 'rxjs';

@Component({
  selector: 'app-frio-vs-caliente',
  imports: [],
  templateUrl: './frio-vs-caliente.html',
  styleUrl: './frio-vs-caliente.css',
})
export class FrioVsCaliente implements OnDestroy {
  // Frío: cada subscribe() dispara una ejecución nueva e independiente
  private frio$ = interval(1000);

  // Caliente: share() hace que todos los suscriptores compartan la misma ejecución
  private caliente$ = interval(1000).pipe(share());

  valorFrio1 = signal<number | null>(null);
  valorFrio2 = signal<number | null>(null);
  valorCaliente1 = signal<number | null>(null);
  valorCaliente2 = signal<number | null>(null);

  // El consumidor 1 arranca apenas se crea el componente, en ambos casos
  private subFrio1 = this.frio$.subscribe((v) => this.valorFrio1.set(v));
  private subCaliente1 = this.caliente$.subscribe((v) => this.valorCaliente1.set(v));

  private subFrio2: Subscription | null = null;
  private subCaliente2: Subscription | null = null;

  agregarConsumidorFrio() {
    if (this.subFrio2) return;
    this.subFrio2 = this.frio$.subscribe((v) => this.valorFrio2.set(v));
  }

  agregarConsumidorCaliente() {
    if (this.subCaliente2) return;
    this.subCaliente2 = this.caliente$.subscribe((v) => this.valorCaliente2.set(v));
  }

  ngOnDestroy() {
    this.subFrio1.unsubscribe();
    this.subCaliente1.unsubscribe();
    this.subFrio2?.unsubscribe();
    this.subCaliente2?.unsubscribe();
  }
}
