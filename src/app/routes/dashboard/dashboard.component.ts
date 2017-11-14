import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatternService } from '../../services/pattern.service';
import { FormulaService } from '../../services/formula.service';
import { Pattern, Formula } from '../../classes/pattern';

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
  private formulas: Formula[];

  constructor(
    private router: Router,
    private patternService: PatternService,
    private formulaService: FormulaService,
    private dialog: MdDialog,
    private snackbar: MdSnackBar
  ) {
    this.patterns = new Array<Pattern>();
  }

  // this class might be one of the best examples of code dublication, have fun ^^

  async ngOnInit() {
    this.patterns = await this.patternService.getAll()
      .then(data => {
        console.log(`received ->`, data);
        return data;
      });

    this.formulas = await this.formulaService.getAll()
      .then(data => {
        console.log(`received ->`, data);
        return data;
      });
  }

  newPattern() {
    this.router.navigate(['/pattern']);
  }

  newFormula() {
    this.router.navigate(['/formula']);
  }

  editPattern(pattern: Pattern) {
    this.router.navigate(['/pattern', pattern._id ]);
  }

  editFormula(formula: Formula) {
    this.router.navigate(['/formula', formula._id ]);
  }

  deletePattern(pattern: Pattern) {
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

  deleteFormula(formula: Formula) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: formula.name, question: 'Do you really want to delete this formula!' }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const idx = this.formulas.indexOf(formula);
        if (idx > -1) {
          this.formulas.splice(idx, 1);
          this.formulaService.delete(formula._id);
        }
        const snackBarRef = this.snackbar.openFromComponent(InfoSnackbarComponent, {
          duration: 300,
          extraClasses: ['snackbar', 'info'],
          data: 'Formula succesfully deleted!'
        });
      }
    });
  }

  playPattern(pattern: Pattern) {
    this.patternService.play(pattern._id);
  }

  playFormula(formula: Formula) {
    this.formulaService.play(formula._id);
  }
}
