import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeReceptor } from './mensaje-receptor';

describe('MensajeReceptor', () => {
  let component: MensajeReceptor;
  let fixture: ComponentFixture<MensajeReceptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeReceptor],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeReceptor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
