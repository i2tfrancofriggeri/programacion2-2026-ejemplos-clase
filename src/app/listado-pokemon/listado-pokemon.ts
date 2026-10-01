import { Component, OnInit, inject, signal } from '@angular/core';
import { Pokemon, PokemonResumen } from '../pokemon';

@Component({
  selector: 'app-listado-pokemon',
  imports: [],
  templateUrl: './listado-pokemon.html',
  styleUrl: './listado-pokemon.css',
})
export class ListadoPokemon implements OnInit {
  private pokemonService = inject(Pokemon);

  // Signal y no propiedad común: en una app zoneless es lo que repinta la vista
  // cuando llega la respuesta (Clase 8, sección 6)
  resultados = signal<PokemonResumen[]>([]);

  ngOnInit() {
    this.pokemonService.obtenerListado(20).subscribe({
      next: (respuesta) => this.resultados.set(respuesta.results),
      error: (err) => console.error('Error al obtener pokemones', err),
    });
  }
}
