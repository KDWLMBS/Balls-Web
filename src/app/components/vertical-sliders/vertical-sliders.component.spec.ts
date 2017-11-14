import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSlidersComponent } from './vertical-sliders.component';

describe('VerticalSlidersComponent', () => {
  let component: VerticalSlidersComponent;
  let fixture: ComponentFixture<VerticalSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
