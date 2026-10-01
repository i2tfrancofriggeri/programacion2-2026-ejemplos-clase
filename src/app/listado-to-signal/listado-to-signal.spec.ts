import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ListadoToSignal } from './listado-to-signal';

describe('ListadoToSignal', () => {
  let component: ListadoToSignal;
  let fixture: ComponentFixture<ListadoToSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoToSignal],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoToSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
