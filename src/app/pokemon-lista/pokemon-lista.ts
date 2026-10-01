import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-lista',
  imports: [],
  templateUrl: './pokemon-lista.html',
  styleUrl: './pokemon-lista.css',
})
export class PokemonLista {
  protected pokemonService = inject(Pokemon);

  pokemones = toSignal(
    this.pokemonService.obtenerListado(12).pipe(map((respuesta) => respuesta.results)),
    { initialValue: [] },
  );

  // Para resaltar el seleccionado en la lista
  seleccionado = toSignal(this.pokemonService.seleccionado$, { initialValue: null });
}
