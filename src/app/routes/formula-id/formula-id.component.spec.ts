import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaIdComponent } from './formula-id.component';

describe('FormulaIdComponent', () => {
  let component: FormulaIdComponent;
  let fixture: ComponentFixture<FormulaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
