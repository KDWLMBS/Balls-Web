import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Pattern, Formula } from '../classes/pattern';

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
          console.log('An error occurred:', err.error.message);
        } else {
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
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return null;
      });
  }

  async add(pattern: Pattern): Promise<Pattern> {
    return await this.http.put<Pattern>('http://localhost:8080/api/pattern', pattern)
      .toPromise()
      .then((data) => {
        console.log(`add(${pattern}) -> `, data);
        return data;
      });
  }

  async save(pattern: Pattern): Promise<Pattern> {
    console.log('pattern ', pattern);
    return await this.http.post<Pattern>(`http://localhost:8080/api/pattern/${pattern._id}`, pattern)
      .toPromise()
      .then((data) => {
        console.log(`save(${pattern}) -> `, data);
        return data;
      });
  }

  async play(id: string) {
    this.http.post(`http://localhost:8080/api/pattern/play/${id}`, null)
    .toPromise()
    .then((data) => {
      console.log(`play(${id}) -> `, data);
    });
  }

  async delete(id: string) {
    this.http.delete(`http://localhost:8080/api/pattern/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`delete(${id}) -> `, data);
      });
  }
}
