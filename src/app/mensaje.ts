import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mensaje {
  private mensajeSubject = new Subject<string>();

  // Observable público: solo permite suscribirse, no emitir
  mensaje$ = this.mensajeSubject.asObservable();

  enviarMensaje(texto: string) {
    this.mensajeSubject.next(texto);
  }
}
