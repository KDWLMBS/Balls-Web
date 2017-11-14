import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternIdComponent } from './pattern-id.component';

describe('PatternIdComponent', () => {
  let component: PatternIdComponent;
  let fixture: ComponentFixture<PatternIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
