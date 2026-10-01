import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { RespuestaCompleta } from './respuesta-completa';

describe('RespuestaCompleta', () => {
  let component: RespuestaCompleta;
  let fixture: ComponentFixture<RespuestaCompleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaCompleta],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(RespuestaCompleta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
