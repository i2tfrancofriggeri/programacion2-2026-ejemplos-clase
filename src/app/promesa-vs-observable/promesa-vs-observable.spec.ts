import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromesaVsObservable } from './promesa-vs-observable';

describe('PromesaVsObservable', () => {
  let component: PromesaVsObservable;
  let fixture: ComponentFixture<PromesaVsObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromesaVsObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(PromesaVsObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
