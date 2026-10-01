import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DetalleAnidado } from './detalle-anidado';

describe('DetalleAnidado', () => {
  let component: DetalleAnidado;
  let fixture: ComponentFixture<DetalleAnidado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAnidado],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAnidado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
