import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrioVsCaliente } from './frio-vs-caliente';

describe('FrioVsCaliente', () => {
  let component: FrioVsCaliente;
  let fixture: ComponentFixture<FrioVsCaliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrioVsCaliente],
    }).compileComponents();

    fixture = TestBed.createComponent(FrioVsCaliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
