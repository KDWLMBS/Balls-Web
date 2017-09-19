import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Pattern } from "../classes/pattern";

@Injectable()
export class PatternService {
  constructor(private http: HttpClient) { }
  
  async getAll(): Promise<Pattern[]> {
    console.log('request');
    this.http.get('http://localhost:8080/api/pattern/all')
      .subscribe((data) => {
        let p: Pattern = new Pattern();
        Object.assign(p, data);
        return p;
      });
  }

  async get(id: string): Promise<Pattern> {
    this.http.get(`http://localhost:8080/api/pattern/${id}`)
      .subscribe((res) => {
        console.log(res);
        // return <Pattern>JSON.parse(res);
      });
    return new Pattern();
  }

  async save(pattern: Pattern) {
    debugger;
    let body = JSON.stringify(pattern);
    this.http.put('http://localhost:8080/api/pattern', body)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
