import { Component, OnInit } from '@angular/core';
import { PatternService } from '../../services/pattern.service';
import { Pattern } from '../../classes/pattern';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  arr: Array<{ val: number }>;

  constructor(
    private patternService: PatternService
  ) {
    this.arr = [{ val: 1 }, { val: 10 }, { val: 25 }, { val: 50 }, { val: 100 }];
  }

  ngOnInit() { }
}
