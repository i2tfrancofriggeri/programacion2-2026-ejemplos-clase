import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionEmisor } from './seleccion-emisor';

describe('SeleccionEmisor', () => {
  let component: SeleccionEmisor;
  let fixture: ComponentFixture<SeleccionEmisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionEmisor],
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionEmisor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
