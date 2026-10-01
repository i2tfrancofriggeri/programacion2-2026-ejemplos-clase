import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ObservablesHttp } from './observables-http';

describe('ObservablesHttp', () => {
  let component: ObservablesHttp;
  let fixture: ComponentFixture<ObservablesHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesHttp],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
