import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Seleccion } from '../seleccion';

@Component({
  selector: 'app-seleccion-signal',
  imports: [],
  templateUrl: './seleccion-signal.html',
  styleUrl: './seleccion-signal.css',
})
export class SeleccionSignal {
  private seleccionService = inject(Seleccion);

  // Sin subscribe()/unsubscribe() manual: la limpieza es automática
  seleccionado = toSignal(this.seleccionService.seleccionado$, { initialValue: null });
}
