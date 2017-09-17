import { Component, OnInit, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss']
})
export class ErrorSnackbarComponent implements OnInit {
  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any) {
    
  }

  ngOnInit() {
  }
}
