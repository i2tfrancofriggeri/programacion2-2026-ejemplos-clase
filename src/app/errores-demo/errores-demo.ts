import { Component, inject, signal } from '@angular/core';
import { DetallePokemon, Pokemon } from '../pokemon';

@Component({
  selector: 'app-errores-demo',
  imports: [],
  templateUrl: './errores-demo.html',
  styleUrl: './errores-demo.css',
})
export class ErroresDemo {
  private pokemonService = inject(Pokemon);

  detalle = signal<DetallePokemon | null>(null);
  error = signal<string | null>(null);
  cargando = signal(false);

  buscar(nombre: string) {
    this.cargando.set(true);
    this.detalle.set(null);
    this.error.set(null);

    // El servicio ya tradujo el HttpErrorResponse: acá solo se muestra el mensaje
    this.pokemonService.obtenerDetalleConMensaje(nombre).subscribe({
      next: (detalle) => {
        this.detalle.set(detalle);
        this.cargando.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message);
        this.cargando.set(false);
      },
    });
  }
}
