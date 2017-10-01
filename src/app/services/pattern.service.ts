import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

import { Pattern } from "../classes/pattern";

@Injectable()
export class PatternService {

  constructor(private http: HttpClient) { }
  
  async getAll(): Promise<Pattern[]> {
    console.log(`getAll() called!`);
    return this.http.get<Pattern[]>('http://localhost:8080/api/pattern/all')
      .toPromise()
      .then((data) => {
        console.log(`getAll() -> ${data}`);
        return data;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return new Array<Pattern>();
      });
  }

  async get(id: string): Promise<Pattern> {
    console.log(`get(${id}) called!`);
    return this.http.get<Pattern>(`http://localhost:8080/api/pattern/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`get(${id}) -> `, data);
        return data;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return null;
      });
  }

  async save(pattern: Pattern) {
    console.log('pattern ', pattern);
    let body = JSON.stringify(pattern);
    console.log('body ', body);

    this.http.post(`http://localhost:8080/api/pattern/${pattern._id}`, pattern)
      .toPromise()
      .then((data) => {
        console.log(`save(${pattern}) -> `, data);
      });
  }
   
  async delete(pattern: Pattern) {
    console.log('pattern ', pattern);

    this.http.delete(`http://localhost:8080/api/pattern/${pattern._id}`)
      .toPromise()
      .then((data) => {
        console.log(`delete(${pattern._id}) -> `, data);
      });
  }
}
