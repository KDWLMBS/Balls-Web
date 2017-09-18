import { Injectable } from '@angular/core';

@Injectable()
export class Pattern {
  elements: Array<PatternElement>;

  constructor() {
    this.elements = new Array<PatternElement>();
    for(let i = 0; i < 10; i++){
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

  private _cachedPattern: Pattern;

  async getPatterns(): Promise<Array<Pattern>> {
    if(!this._cachedPattern) this._cachedPattern = new Pattern();

    let patterns = new Array<Pattern>();
    for(let i = 0; i < 15; i++){
      patterns.push(this._cachedPattern);
    }
    return patterns;
  }
}
