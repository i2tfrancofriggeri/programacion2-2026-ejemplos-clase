import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-seleccionado',
  imports: [],
  templateUrl: './pokemon-seleccionado.html',
  styleUrl: './pokemon-seleccionado.css',
})
export class PokemonSeleccionado {
  private pokemonService = inject(Pokemon);
  nombreSeleccionado = signal<string | null>(null);

  constructor() {
    // seleccionado$ nunca completa: takeUntilDestroyed() corta la suscripción
    // cuando el componente se destruye. Va en el constructor porque, igual que
    // inject(), necesita un contexto de inyección.
    this.pokemonService.seleccionado$
      .pipe(takeUntilDestroyed())
      .subscribe((nombre) => this.nombreSeleccionado.set(nombre));
  }
}
