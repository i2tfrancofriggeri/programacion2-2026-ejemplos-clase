import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionReceptor } from './seleccion-receptor';

describe('SeleccionReceptor', () => {
  let component: SeleccionReceptor;
  let fixture: ComponentFixture<SeleccionReceptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionReceptor],
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionReceptor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
