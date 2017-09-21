import { Component, OnInit } from '@angular/core';
import { PatternService } from "../../services/pattern.service";
import { Pattern } from "../../classes/pattern";

import { MdDialog } from "@angular/material";
import { ConfirmDialogComponent } from "../../components/dialogs/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private patternService: PatternService,
    private dialog: MdDialog
  ) { }

  ngOnInit() { }

  click(ev) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: "Test Dialog", question: "Do you really want to delete this pattern!" }
    });
  }
}
