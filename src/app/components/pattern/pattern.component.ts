import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PatternService } from "../../services/pattern.service";
import { Pattern } from "../../classes/pattern";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) {
    this.pattern = new Pattern();
  }
  
  editable: boolean;
  pattern: Pattern;

  async ngOnInit() {
    debugger;

    this.editable = true;
    this.pattern = await this.route.paramMap
      .toPromise()
      .then((params: ParamMap) => {
        return this.patternService.get(params.get('id'));
      });

  }

  handleValueUpdated(pe: any) {
    console.log('Update', pe);
    // this.elements.find((ele) => ele.index == pe.index).value = pe.value;

  }
}
