import { Component, OnInit, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-action-snackbar',
  templateUrl: './action-snackbar.component.html',
  styleUrls: ['./action-snackbar.component.scss']
})
export class ActionSnackbarComponent implements OnInit {
  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any) {
    
  }

  ngOnInit() {
  }
}
