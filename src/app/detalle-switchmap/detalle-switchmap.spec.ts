import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DetalleSwitchmap } from './detalle-switchmap';

describe('DetalleSwitchmap', () => {
  let component: DetalleSwitchmap;
  let fixture: ComponentFixture<DetalleSwitchmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSwitchmap],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSwitchmap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
