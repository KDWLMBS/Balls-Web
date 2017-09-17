import { Injectable } from '@angular/core';

@Injectable()
export class Pattern {
  elements: Array<PatternElement>;

  constructor() {
    this.elements = new Array<PatternElement>();
    for(let i = 0; i < 20; i++){
      let ele: PatternElement = { index: i, value: Math.floor((Math.random()*99)+1) }
      this.elements.push(ele);
    }
  }
}
export interface PatternElement {
  index: number,
  value: number
}
export class PatternService {
  private _simPattern: Pattern;

  constructor() {
  }

  get simPattern(): Pattern {
    if(!this._simPattern) this._simPattern = new Pattern();
    return this._simPattern;
  }

  set simPattern(pattern: Pattern) {
    this._simPattern = pattern;
  }

  async getPatterns(): Promise<Array<Pattern>> {
    let patterns = new Array<Pattern>();
    for(let i = 0; i < 20; i++){
      patterns.push(new Pattern());
    }
    return patterns;
  }
}
