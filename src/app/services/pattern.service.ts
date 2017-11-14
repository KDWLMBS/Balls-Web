import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { Pattern, Formula } from '../classes/pattern';

@Injectable()
export class PatternService {
  constructor(private http: HttpClient) { }

  async getAll(): Promise<Pattern[]> {
    console.log(`getAll() called!`);
    return await this.http.get<Pattern[]>(`${environment.apiUrl}pattern/all`)
      .toPromise()
      .then((data) => {
        console.log(`getAll() -> ${data}`);
        return data;
      });
  }

  async get(id: string): Promise<Pattern> {
    console.log(`get(${id}) called!`);
    return await this.http.get<Pattern>(`${environment.apiUrl}pattern/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`get(${id}) -> `, data);
        return data;
      });
  }

  async add(pattern: Pattern): Promise<Pattern> {
    return await this.http.put<Pattern>(`${environment.apiUrl}pattern`, pattern)
      .toPromise()
      .then((data) => {
        console.log(`add(${pattern}) -> `, data);
        return data;
      });
  }

  async save(pattern: Pattern): Promise<Pattern> {
    console.log('pattern ', pattern);
    return await this.http.post<Pattern>(`${environment.apiUrl}pattern/${pattern._id}`, pattern)
      .toPromise()
      .then((data) => {
        console.log(`save(${pattern}) -> `, data);
        return data;
      });
  }

  async play(id: string) {
    this.http.post(`${environment.apiUrl}pattern/play/${id}`, null)
    .toPromise()
    .then((data) => {
      console.log(`play(${id}) -> `, data);
    });
  }

  async delete(id: string) {
    this.http.delete(`${environment.apiUrl}pattern/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`delete(${id}) -> `, data);
      });
  }
}
