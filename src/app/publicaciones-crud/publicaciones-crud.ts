import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Publicacion, Publicaciones } from '../publicaciones';

@Component({
  selector: 'app-publicaciones-crud',
  imports: [FormsModule],
  templateUrl: './publicaciones-crud.html',
  styleUrl: './publicaciones-crud.css',
})
export class PublicacionesCrud implements OnInit {
  private publicacionesService = inject(Publicaciones);

  publicaciones = signal<Publicacion[]>([]);
  titulo = signal('');

  ngOnInit() {
    this.publicacionesService.obtenerTodas(5).subscribe((lista) => this.publicaciones.set(lista));
  }

  agregar() {
    // El servidor devuelve la publicación creada con el id que le asignó (siempre 101)
    this.publicacionesService
      .crear({ userId: 1, title: this.titulo(), body: '' })
      .subscribe((creada) => {
        this.publicaciones.update((lista) => [creada, ...lista]);
        this.titulo.set('');
      });
  }

  agregarSinSubscribe() {
    // Sin subscribe() el POST nunca sale: mirar la pestaña Network
    this.publicacionesService.crear({ userId: 1, title: this.titulo(), body: '' });
  }

  marcarEditada(publicacion: Publicacion) {
    // PATCH: solo se manda el campo que cambia
    this.publicacionesService
      .cambiarTitulo(publicacion.id, `${publicacion.title} (editado)`)
      .subscribe((actualizada) =>
        this.publicaciones.update((lista) =>
          lista.map((p) => (p.id === publicacion.id ? { ...p, title: actualizada.title } : p)),
        ),
      );
  }

  borrar(id: number) {
    this.publicacionesService
      .eliminar(id)
      .subscribe(() => this.publicaciones.update((lista) => lista.filter((p) => p.id !== id)));
  }
}
