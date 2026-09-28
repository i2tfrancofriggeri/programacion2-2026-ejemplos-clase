import { Component, signal } from '@angular/core';
import { SeleccionEmisor } from '../seleccion-emisor/seleccion-emisor';
import { SeleccionReceptor } from '../seleccion-receptor/seleccion-receptor';

@Component({
  selector: 'app-seleccion-demo',
  imports: [SeleccionEmisor, SeleccionReceptor],
  templateUrl: './seleccion-demo.html',
  styleUrl: './seleccion-demo.css',
})
export class SeleccionDemo {
  // Empieza desmontado a propósito: elegí un ítem antes de montarlo y fijate qué recibe
  mostrarReceptor = signal(false);
}
