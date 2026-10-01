import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detalle-switchmap',
  imports: [],
  templateUrl: './detalle-switchmap.html',
  styleUrl: './detalle-switchmap.css',
})
export class DetalleSwitchmap {
  private pokemonService = inject(Pokemon);

  seleccionado = toSignal(this.pokemonService.seleccionado$, { initialValue: null });

  // ✅ Preferir: switchMap cancela la petición anterior apenas llega una selección
  // nueva, así que solo puede mostrarse la respuesta de la ÚLTIMA selección
  // (con la misma demora al azar que la tarjeta de al lado).
  detalle = toSignal(
    this.pokemonService.seleccionado$.pipe(
      filter((nombre) => nombre !== null),
      switchMap((nombre) => this.pokemonService.obtenerDetalleConDemora(nombre)),
    ),
  );
}
