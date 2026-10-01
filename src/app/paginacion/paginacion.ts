import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Pokemon, PokemonResumen } from '../pokemon';

@Component({
  selector: 'app-paginacion',
  imports: [],
  templateUrl: './paginacion.html',
  styleUrl: './paginacion.css',
})
export class Paginacion implements OnInit {
  private pokemonService = inject(Pokemon);
  readonly porPagina = 10;

  desde = signal(0);
  total = signal(0);
  resultados = signal<PokemonResumen[]>([]);

  paginaActual = computed(() => this.desde() / this.porPagina + 1);
  totalPaginas = computed(() => Math.ceil(this.total() / this.porPagina));

  ngOnInit() {
    this.cargar();
  }

  anterior() {
    this.desde.update((d) => d - this.porPagina);
    this.cargar();
  }

  siguiente() {
    this.desde.update((d) => d + this.porPagina);
    this.cargar();
  }

  private cargar() {
    this.pokemonService.obtenerPagina(this.porPagina, this.desde()).subscribe((respuesta) => {
      this.resultados.set(respuesta.results);
      this.total.set(respuesta.count);
    });
  }
}
