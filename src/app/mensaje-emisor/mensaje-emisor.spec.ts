import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeEmisor } from './mensaje-emisor';

describe('MensajeEmisor', () => {
  let component: MensajeEmisor;
  let fixture: ComponentFixture<MensajeEmisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeEmisor],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeEmisor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
