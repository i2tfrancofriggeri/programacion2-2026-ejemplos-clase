import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-listado-to-signal',
  imports: [],
  templateUrl: './listado-to-signal.html',
  styleUrl: './listado-to-signal.css',
})
export class ListadoToSignal {
  private pokemonService = inject(Pokemon);

  // Sin ngOnInit ni subscribe(): toSignal() se suscribe al crear el componente
  // y limpia la suscripción solo
  resultados = toSignal(
    this.pokemonService.obtenerListado(20).pipe(map((respuesta) => respuesta.results)),
    { initialValue: [] },
  );
}
