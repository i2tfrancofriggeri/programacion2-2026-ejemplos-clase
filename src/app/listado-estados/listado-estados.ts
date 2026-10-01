import { Component, OnInit, inject, signal } from '@angular/core';
import { Pokemon, PokemonResumen } from '../pokemon';

@Component({
  selector: 'app-listado-estados',
  imports: [],
  templateUrl: './listado-estados.html',
  styleUrl: './listado-estados.css',
})
export class ListadoEstados implements OnInit {
  private pokemonService = inject(Pokemon);

  resultados = signal<PokemonResumen[]>([]);
  cargando = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.cargar();
  }

  cargar(forzarError = false) {
    this.cargando.set(true);
    this.error.set(null);

    const peticion$ = forzarError
      ? this.pokemonService.obtenerListadoRoto()
      : this.pokemonService.obtenerListado(20);

    peticion$.subscribe({
      next: (respuesta) => {
        this.resultados.set(respuesta.results);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo obtener el listado. Probá de nuevo.');
        this.cargando.set(false);
      },
    });
  }
}
