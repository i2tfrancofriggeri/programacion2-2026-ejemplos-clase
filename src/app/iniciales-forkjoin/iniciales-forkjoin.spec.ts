import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { InicialesForkjoin } from './iniciales-forkjoin';

describe('InicialesForkjoin', () => {
  let component: InicialesForkjoin;
  let fixture: ComponentFixture<InicialesForkjoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicialesForkjoin],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(InicialesForkjoin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
