import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { Formula } from '../classes/pattern';

@Injectable()
export class FormulaService {
  constructor(private http: HttpClient) { }

  async getAll(): Promise<Formula[]> {
    return await this.http.get<Formula[]>(`${environment.apiUrl}formula/all`)
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  async get(id: string): Promise<Formula> {
    return await this.http.get<Formula>(`${environment.apiUrl}formula/${id}`)
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  async add(formula: Formula): Promise<Formula> {
    return await this.http.put<Formula>(`${environment.apiUrl}formula`, formula)
      .toPromise()
      .then((data) => {
        console.log(`add(${formula}) -> `, data);
        return data;
      });
  }

  async save(formula: Formula): Promise<boolean> {
    return await this.http.post(`${environment.apiUrl}formula/${formula._id}`, formula)
      .toPromise()
      .then((data) => {
        console.log(`save(${formula}) -> `, data);
        return true;
      })
      .catch(err => {
        return false;
      });
  }

  async play(id: string) {
    this.http.post(`${environment.apiUrl}formula/play/${id}`, null)
    .toPromise()
    .then((data) => {
      console.log(`play(${id}) -> `, data);
    });
  }

  async delete(id: string) {
    this.http.delete(`${environment.apiUrl}formula/${id}`)
      .toPromise()
      .then((data) => {
        console.log(`delete(${id}) -> `, data);
      });
  }
}
