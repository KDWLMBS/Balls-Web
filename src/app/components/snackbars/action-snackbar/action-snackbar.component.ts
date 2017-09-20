import { Component, Inject } from '@angular/core';
import { MdSnackBarRef, MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-action-snackbar',
  templateUrl: './action-snackbar.component.html',
  styleUrls: ['./action-snackbar.component.scss']
})
export class ActionSnackbarComponent {
  constructor(
    @Inject(MD_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MdSnackBarRef<ActionSnackbarComponent>
  ) {
   
  }

  action(eve) {
    this.snackBarRef.closeWithAction();
  }
}
