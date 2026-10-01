import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PokemonLista } from './pokemon-lista';

describe('PokemonLista', () => {
  let component: PokemonLista;
  let fixture: ComponentFixture<PokemonLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLista],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
