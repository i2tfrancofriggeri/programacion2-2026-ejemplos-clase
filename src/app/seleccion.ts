import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Seleccion {
  private seleccionadoSubject = new BehaviorSubject<string | null>(null);

  seleccionado$ = this.seleccionadoSubject.asObservable();

  seleccionar(item: string) {
    this.seleccionadoSubject.next(item);
  }
}
