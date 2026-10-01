import { Component, inject, signal } from '@angular/core';
import { Pokemon } from '../pokemon';

interface DatosRespuesta {
  status: number;
  contentType: string | null;
  cantidad: number;
}

@Component({
  selector: 'app-respuesta-completa',
  imports: [],
  templateUrl: './respuesta-completa.html',
  styleUrl: './respuesta-completa.css',
})
export class RespuestaCompleta {
  private pokemonService = inject(Pokemon);
  datos = signal<DatosRespuesta | null>(null);

  pedir() {
    // Con observe: 'response' llega un HttpResponse, no solo el cuerpo
    this.pokemonService.obtenerListadoCompleto(5).subscribe((respuesta) => {
      this.datos.set({
        status: respuesta.status,
        contentType: respuesta.headers.get('content-type'),
        cantidad: respuesta.body?.results.length ?? 0,
      });
    });
  }
}
