import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { BuscadorPokemon } from './buscador-pokemon';

describe('BuscadorPokemon', () => {
  let component: BuscadorPokemon;
  let fixture: ComponentFixture<BuscadorPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorPokemon],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
