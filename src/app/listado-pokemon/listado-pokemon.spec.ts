import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ListadoPokemon } from './listado-pokemon';

describe('ListadoPokemon', () => {
  let component: ListadoPokemon;
  let fixture: ComponentFixture<ListadoPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPokemon],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
