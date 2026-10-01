import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-buscador-pokemon',
  imports: [FormsModule],
  templateUrl: './buscador-pokemon.html',
  styleUrl: './buscador-pokemon.css',
})
export class BuscadorPokemon {
  private pokemonService = inject(Pokemon);
  texto = signal('');

  resultado = toSignal(
    toObservable(this.texto).pipe(
      map((t) => t.trim().toLowerCase()),
      debounceTime(400), // esperar a que deje de escribir
      distinctUntilChanged(), // no repetir la misma búsqueda
      filter((t) => t.length > 0), // no buscar con el campo vacío
      switchMap((t) =>
        this.pokemonService.obtenerDetalle(t).pipe(
          // Adentro del switchMap a propósito: si estuviera afuera, el primer 404
          // cortaría el flujo y el buscador dejaría de funcionar
          catchError(() => of(null)),
        ),
      ),
    ),
    { initialValue: null },
  );
}
