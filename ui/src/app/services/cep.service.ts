import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { End } from '../models/end';


@Injectable()
export class CepService {

  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.api_cep;
  }

  get(cep: string) {
    return this.http.get<End>(`${this.apiURL}/${cep}/json`);
  }

}
