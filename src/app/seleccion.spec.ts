import { TestBed } from '@angular/core/testing';

import { Seleccion } from './seleccion';

describe('Seleccion', () => {
  let service: Seleccion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seleccion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
