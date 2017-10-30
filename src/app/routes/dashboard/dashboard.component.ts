import { Component, OnInit } from '@angular/core';
import { PatternService } from '../../services/pattern.service';
import { Router } from '@angular/router';

import { Pattern } from '../../classes/pattern';

import { MdDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';

import { MdSnackBar } from '@angular/material';
import { InfoSnackbarComponent } from '../../components/snackbars/info-snackbar/info-snackbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private patterns: Pattern[];

  constructor(
    private router: Router,
    private patternService: PatternService,
    private dialog: MdDialog,
    private snackbar: MdSnackBar
  ) {
    this.patterns = new Array<Pattern>();
  }

  async ngOnInit() {
    this.patterns = await this.patternService.getAll()
      .then(data => {
        console.log(`received ->`, data);
        return data;
      });
  }

  newPattern() {
    const pattern = new Pattern();
    this.patternService.add(pattern)
      .then(res => {
        this.patterns.push(res);
      });
    // Todo: Just push when save was succesfull
  }

  edit(pattern: Pattern) {
    this.router.navigate(['/pattern', pattern._id ]);
  }

  delete(pattern: Pattern) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: pattern.name, question: 'Do you really want to delete this pattern!' }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const idx = this.patterns.indexOf(pattern);
        if (idx > -1) {
          this.patterns.splice(idx, 1);
          this.patternService.delete(pattern._id);
        }
        const snackBarRef = this.snackbar.openFromComponent(InfoSnackbarComponent, {
          duration: 300,
          extraClasses: ['snackbar', 'info'],
          data: 'Pattern succesfully deleted!'
        });
      }
    });
  }

  play(pattern: Pattern) {
    this.patternService.play(pattern._id);
  }
}
