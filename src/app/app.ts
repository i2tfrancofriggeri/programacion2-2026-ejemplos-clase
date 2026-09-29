import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorObservable } from './contador-observable/contador-observable';
import { FrioVsCaliente } from './frio-vs-caliente/frio-vs-caliente';
import { ContadorSignal } from './contador-signal/contador-signal';
import { PromesaVsObservable } from './promesa-vs-observable/promesa-vs-observable';
import { PipeMapDemo } from './pipe-map-demo/pipe-map-demo';
import { MensajeEmisor } from './mensaje-emisor/mensaje-emisor';
import { MensajeReceptor } from './mensaje-receptor/mensaje-receptor';
import { SeleccionDemo } from './seleccion-demo/seleccion-demo';
import { SeleccionSignal } from './seleccion-signal/seleccion-signal';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContadorObservable,
    FrioVsCaliente,
    ContadorSignal,
    PromesaVsObservable,
    PipeMapDemo,
    MensajeEmisor,
    MensajeReceptor,
    SeleccionDemo,
    SeleccionSignal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
