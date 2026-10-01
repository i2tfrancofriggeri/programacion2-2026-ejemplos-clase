import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ErroresDemo } from './errores-demo';

describe('ErroresDemo', () => {
  let component: ErroresDemo;
  let fixture: ComponentFixture<ErroresDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroresDemo],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErroresDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
