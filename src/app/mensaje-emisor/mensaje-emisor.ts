import { Component, inject } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje-emisor',
  imports: [],
  templateUrl: './mensaje-emisor.html',
  styleUrl: './mensaje-emisor.css',
})
export class MensajeEmisor {
  private mensajeService = inject(Mensaje);
  contador = 0;

  emitir() {
    this.contador++;
    this.mensajeService.enviarMensaje(`Click número ${this.contador}`);
  }
}
