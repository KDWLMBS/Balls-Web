import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternMultipleComponent } from './pattern-multiple.component';

describe('PatternMultipleComponent', () => {
  let component: PatternMultipleComponent;
  let fixture: ComponentFixture<PatternMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
