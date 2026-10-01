import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Paginacion } from './paginacion';

describe('Paginacion', () => {
  let component: Paginacion;
  let fixture: ComponentFixture<Paginacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paginacion],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Paginacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
