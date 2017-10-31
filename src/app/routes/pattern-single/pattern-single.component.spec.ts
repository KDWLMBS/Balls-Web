import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternSingleComponent } from './pattern-single.component';

describe('PatternSingleComponent', () => {
  let component: PatternSingleComponent;
  let fixture: ComponentFixture<PatternSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
