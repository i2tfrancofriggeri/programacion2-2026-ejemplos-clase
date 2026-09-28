import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionDemo } from './seleccion-demo';

describe('SeleccionDemo', () => {
  let component: SeleccionDemo;
  let fixture: ComponentFixture<SeleccionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
