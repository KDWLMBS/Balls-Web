import { Component, OnInit, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-info-snackbar',
  templateUrl: './info-snackbar.component.html',
  styleUrls: ['./info-snackbar.component.scss']
})
export class InfoSnackbarComponent implements OnInit {
  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any) {
    
  }

  ngOnInit() {
  }
}
