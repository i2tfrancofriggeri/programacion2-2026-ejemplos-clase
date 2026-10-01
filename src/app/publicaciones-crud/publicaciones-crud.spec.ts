import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PublicacionesCrud } from './publicaciones-crud';

describe('PublicacionesCrud', () => {
  let component: PublicacionesCrud;
  let fixture: ComponentFixture<PublicacionesCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesCrud],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
