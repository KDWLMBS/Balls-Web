import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { InfoSnackbarComponent } from "../../components/snackbars/info-snackbar/info-snackbar.component";
import { ActionSnackbarComponent } from "../../components/snackbars/action-snackbar/action-snackbar.component";
import { WarningSnackbarComponent } from "../../components/snackbars/warning-snackbar/warning-snackbar.component";
import { ErrorSnackbarComponent } from "../../components/snackbars/error-snackbar/error-snackbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  snackBar: MdSnackBar;

  constructor(mdsb: MdSnackBar) {
    this.snackBar = mdsb;
  }

  async ngOnInit() {
    {
        let snackBarRef = this.snackBar.openFromComponent(InfoSnackbarComponent, {
          duration: 3000,
          extraClasses: ['snackbar', 'info'],
          data: 'App information!'
        }); 
    }
    {
      let snackBarRef = this.snackBar.openFromComponent(ActionSnackbarComponent, {
        duration: 3000,
        extraClasses: ['snackbar', 'action'],
        data: 'App action!'
      });

      snackBarRef.onAction().subscribe(() => {
        console.log('action is working');
      });
    }
    // {
    //   let snackBarRef = this.snackBar.openFromComponent(WarningSnackbarComponent, {
    //     duration: 3000,
    //     extraClasses: ['snackbar', 'warning'],
    //     data: 'App warning!'
    //   });
    // }
    // {
    //   let snackBarRef = this.snackBar.openFromComponent(ErrorSnackbarComponent, {
    //     duration: 300000,
    //     extraClasses: ['snackbar', 'error'],
    //     data: 'App error!'
    //   });
    // }
  }

}
