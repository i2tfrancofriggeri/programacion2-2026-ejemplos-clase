import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Seleccion } from '../seleccion';

@Component({
  selector: 'app-seleccion-receptor',
  imports: [],
  templateUrl: './seleccion-receptor.html',
  styleUrl: './seleccion-receptor.css',
})
export class SeleccionReceptor implements OnDestroy {
  private seleccionService = inject(Seleccion);
  seleccionado: string | null = null;

  // Al suscribirse recibe de inmediato el último valor emitido, aunque sea tarde
  private subscription: Subscription = this.seleccionService.seleccionado$.subscribe(
    (item) => (this.seleccionado = item),
  );

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
