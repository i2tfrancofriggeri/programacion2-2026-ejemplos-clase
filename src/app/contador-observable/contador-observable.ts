import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-contador-observable',
  imports: [],
  templateUrl: './contador-observable.html',
  styleUrl: './contador-observable.css',
})
export class ContadorObservable implements OnDestroy {
  valor: number | null = null;
  suscripto = false;

  // El observable existe (y podría estar emitiendo) más allá de que alguien se suscriba
  private contador$ = interval(1000);
  private subscription: Subscription | null = null;

  encender() {
    if (this.suscripto) return;

    this.suscripto = true;
    this.subscription = this.contador$.subscribe({
      next: (valor) => (this.valor = valor),
    });
  }

  apagar() {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.suscripto = false;
  }

  ngOnDestroy() {
    // Si no se desuscribe acá, la suscripción sigue viva aunque el componente ya no exista
    this.apagar();
  }
}
