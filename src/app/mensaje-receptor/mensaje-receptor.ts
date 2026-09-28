import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje-receptor',
  imports: [],
  templateUrl: './mensaje-receptor.html',
  styleUrl: './mensaje-receptor.css',
})
export class MensajeReceptor implements OnDestroy {
  private mensajeService = inject(Mensaje);
  ultimoMensaje: string | null = null;

  private subscription: Subscription = this.mensajeService.mensaje$.subscribe(
    (texto) => (this.ultimoMensaje = texto),
  );

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
