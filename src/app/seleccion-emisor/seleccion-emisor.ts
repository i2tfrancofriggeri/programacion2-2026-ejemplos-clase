import { Component, inject } from '@angular/core';
import { Seleccion } from '../seleccion';

@Component({
  selector: 'app-seleccion-emisor',
  imports: [],
  templateUrl: './seleccion-emisor.html',
  styleUrl: './seleccion-emisor.css',
})
export class SeleccionEmisor {
  private seleccionService = inject(Seleccion);
  items = ['Manzana', 'Banana', 'Naranja'];

  seleccionar(item: string) {
    this.seleccionService.seleccionar(item);
  }
}
