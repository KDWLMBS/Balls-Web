import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertcialSliderComponent } from './vertcial-slider.component';

describe('VertcialSliderComponent', () => {
  let component: VertcialSliderComponent;
  let fixture: ComponentFixture<VertcialSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertcialSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertcialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
