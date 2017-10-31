import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { FormulaService } from '../../services/formula.service';
import { Formula, SHIFTDIRECTION } from '../../classes/pattern';

@Component({
  selector: 'app-formula-id',
  templateUrl: './formula-id.component.html',
  styleUrls: ['./formula-id.component.css']
})
export class FormulaIdComponent implements OnInit {
  private formula: Formula;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formulaService: FormulaService
  ) { }

  async ngOnInit() {
    await this.route.params.subscribe((data) => {
      this.formulaService.get(data.id)
        .then((res) => {
          console.log('patternId', res);

           this.formula = res;
        });
    });

    this.draw();
  }

  draw() {
    
  }
}
