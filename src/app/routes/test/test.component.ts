import { Component, OnInit } from '@angular/core';
import { PatternService } from "../../services/pattern.service";
import { Pattern } from "../../classes/pattern";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private patternService: PatternService) {
    
  }

  ngOnInit() { }
}
