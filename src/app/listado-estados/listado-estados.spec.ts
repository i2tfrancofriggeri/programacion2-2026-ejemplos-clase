import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ListadoEstados } from './listado-estados';

describe('ListadoEstados', () => {
  let component: ListadoEstados;
  let fixture: ComponentFixture<ListadoEstados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEstados],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoEstados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
