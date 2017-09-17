import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSnackbarComponent } from './action-snackbar.component';

describe('ErrorSnackBarComponent', () => {
  let component: ActionSnackbarComponent;
  let fixture: ComponentFixture<ActionSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
