import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorObservable } from './contador-observable';

describe('ContadorObservable', () => {
  let component: ContadorObservable;
  let fixture: ComponentFixture<ContadorObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
