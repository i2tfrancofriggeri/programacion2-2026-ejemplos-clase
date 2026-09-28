import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador-signal',
  imports: [],
  templateUrl: './contador-signal.html',
  styleUrl: './contador-signal.css',
})
export class ContadorSignal {
  contador = signal(0);

  incrementar() {
    this.contador.update((valor) => valor + 1);
  }
}
