import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Publicacion {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// Lo que se envía al crear: todo menos el id, que lo asigna el servidor
export type NuevaPublicacion = Omit<Publicacion, 'id'>;

// JSONPlaceholder acepta escrituras y responde como si las guardara, pero NO persiste nada
@Injectable({
  providedIn: 'root',
})
export class Publicaciones {
  private http = inject(HttpClient);
  private urlBase = 'https://jsonplaceholder.typicode.com/posts';

  obtenerTodas(limite: number): Observable<Publicacion[]> {
    // _limit es el parámetro de JSONPlaceholder para traer solo las primeras N
    return this.http.get<Publicacion[]>(this.urlBase, { params: { _limit: limite } });
  }

  crear(publicacion: NuevaPublicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(this.urlBase, publicacion);
  }

  reemplazar(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(`${this.urlBase}/${publicacion.id}`, publicacion);
  }

  cambiarTitulo(id: number, title: string): Observable<Publicacion> {
    return this.http.patch<Publicacion>(`${this.urlBase}/${id}`, { title });
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`);
  }
}
