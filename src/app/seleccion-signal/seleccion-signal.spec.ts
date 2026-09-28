import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionSignal } from './seleccion-signal';

describe('SeleccionSignal', () => {
  let component: SeleccionSignal;
  let fixture: ComponentFixture<SeleccionSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
