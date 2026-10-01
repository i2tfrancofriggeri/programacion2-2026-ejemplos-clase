import { Component, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DetallePokemon, Pokemon } from '../pokemon';

@Component({
  selector: 'app-iniciales-forkjoin',
  imports: [],
  templateUrl: './iniciales-forkjoin.html',
  styleUrl: './iniciales-forkjoin.css',
})
export class InicialesForkjoin {
  private pokemonService = inject(Pokemon);
  iniciales = signal<DetallePokemon[]>([]);

  cargar() {
    this.iniciales.set([]);
    // Las tres peticiones salen en paralelo; forkJoin emite UNA vez, cuando
    // terminaron todas, con las respuestas en el mismo orden del arreglo
    forkJoin([
      this.pokemonService.obtenerDetalle('bulbasaur'),
      this.pokemonService.obtenerDetalle('charmander'),
      this.pokemonService.obtenerDetalle('squirtle'),
    ]).subscribe((detalles) => this.iniciales.set(detalles));
  }
}
