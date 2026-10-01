import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, delay, retry, throwError } from 'rxjs';

// Tipamos solo las propiedades que se usan, mirando una respuesta real de la API
// (abrir https://pokeapi.co/api/v2/pokemon?limit=20 en el navegador)
export interface PokemonResumen {
  name: string;
  url: string;
}

export interface RespuestaListadoPokemon {
  count: number;
  results: PokemonResumen[];
}

export interface DetallePokemon {
  name: string;
  weight: number;
  height: number;
  sprites: { front_default: string };
}

@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  // En Angular 21 HttpClient viene provisto por defecto: alcanza con inject()
  private http = inject(HttpClient);
  private urlBase = 'https://pokeapi.co/api/v2/pokemon';

  // 5. Estado compartido: el pokémon seleccionado
  private seleccionadoSubject = new BehaviorSubject<string | null>(null);
  seleccionado$ = this.seleccionadoSubject.asObservable();

  // 3. GET: el servicio devuelve el Observable, NO se suscribe
  obtenerListado(limite: number): Observable<RespuestaListadoPokemon> {
    return this.http.get<RespuestaListadoPokemon>(`${this.urlBase}?limit=${limite}`);
  }

  obtenerDetalle(nombre: string): Observable<DetallePokemon> {
    return this.http.get<DetallePokemon>(`${this.urlBase}/${nombre}`);
  }

  seleccionarPokemon(nombre: string) {
    this.seleccionadoSubject.next(nombre);
  }

  // 6.1 Query params con la opción params (Angular arma ?limit=...&offset=...)
  obtenerPagina(limite: number, desde: number): Observable<RespuestaListadoPokemon> {
    return this.http.get<RespuestaListadoPokemon>(this.urlBase, {
      params: { limit: limite, offset: desde },
    });
  }

  // 6.3 Respuesta completa: además del cuerpo, el status y los headers
  obtenerListadoCompleto(limite: number): Observable<HttpResponse<RespuestaListadoPokemon>> {
    return this.http.get<RespuestaListadoPokemon>(this.urlBase, {
      params: { limit: limite },
      observe: 'response',
    });
  }

  // 9.2 Versión de obtenerDetalle que traduce el error a un mensaje para el usuario
  obtenerDetalleConMensaje(nombre: string): Observable<DetallePokemon> {
    return this.http.get<DetallePokemon>(`${this.urlBase}/${nombre}`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        const mensaje =
          error.status === 0
            ? 'No hay conexión con el servidor.'
            : error.status === 404
              ? `No existe un Pokémon llamado "${nombre}".`
              : 'Ocurrió un error inesperado. Probá más tarde.';
        return throwError(() => new Error(mensaje));
      }),
    );
  }

  // --- Solo para las demos ---

  // 4.2 Una URL que no existe, para ver el estado de error sin cortar la conexión
  obtenerListadoRoto(): Observable<RespuestaListadoPokemon> {
    return this.http.get<RespuestaListadoPokemon>(`${this.urlBase}-que-no-existe`);
  }

  // 8.1 Agrega una demora al azar (0 a 2 s) para que las respuestas puedan llegar desordenadas
  obtenerDetalleConDemora(nombre: string): Observable<DetallePokemon> {
    return this.http.get<DetallePokemon>(`${this.urlBase}/${nombre}`).pipe(delay(Math.random() * 2000));
  }
}
