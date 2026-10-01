import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PokemonSeleccionado } from './pokemon-seleccionado';

describe('PokemonSeleccionado', () => {
  let component: PokemonSeleccionado;
  let fixture: ComponentFixture<PokemonSeleccionado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSeleccionado],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSeleccionado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
