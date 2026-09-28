import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMapDemo } from './pipe-map-demo';

describe('PipeMapDemo', () => {
  let component: PipeMapDemo;
  let fixture: ComponentFixture<PipeMapDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeMapDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeMapDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
