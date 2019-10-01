import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa';

@Injectable()
export class EmpresaService {

  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.api_url;
  }

  getById(id: String) {
    return this.http.get<Empresa>(`${this.apiURL}/empresas/${id}`);
  }

  get() {
    return this.http.get<Empresa[]>(`${this.apiURL}/empresas`);
  }

  save(empresa: Empresa) {
    return this.http.post(`${this.apiURL}/empresas`, empresa);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/empresas/${id}`);
  }

  edit(empresa: Empresa) {
    return this.http.put(`${this.apiURL}/empresas/${empresa.id}`, empresa);
  }

}
