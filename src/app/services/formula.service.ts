import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Pattern, Formula } from '../classes/pattern';

@Injectable()
export class FormulaService {
  constructor(private http: HttpClient) { }

  async getAll(): Promise<Formula[]> {
    return this.http.get<Formula[]>('http://localhost:8080/api/formula/all')
      .toPromise()
      .then((data) => {
        return data;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return [];
      });
  }

  async get(id: string): Promise<Formula> {
    return this.http.get<Formula>(`http://localhost:8080/api/formula/${id}`)
      .toPromise()
      .then((data) => {
        return data;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return null;
      });
  }

  async add(formula: Formula) {
    this.http.put('http://localhost:8080/api/formula/', formula)
      .toPromise()
      .then((data) => {
        console.log(`add(${formula}) -> `, data);
      });
  }

  async save(formula: Formula) {
    this.http.post(`http://localhost:8080/api/formula/${formula._id}`, formula)
      .toPromise()
      .then((data) => {
        console.log(`save(${formula}) -> `, data);
      });
  }

  async play(id: string) {
    this.http.post(`http://localhost:8080/api/formula/play/${id}`, null)
    .toPromise()
    .then((data) => {
      console.log(`play(${id}) -> `, data);
    });
  }

  async delete(id: string) {
    this.http.delete(`http://localhost:8080/api/formula/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`delete(${id}) -> `, data);
      });
  }
}
