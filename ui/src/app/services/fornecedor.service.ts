import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fornecedor } from '../models/fornecedor';

@Injectable()
export class FornecedorService {

  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.api_url;
  }

  getById(id: String) {
    return this.http.get<Fornecedor>(`${this.apiURL}/fornecedores/${id}`);
  }

  get() {
    return this.http.get<Fornecedor[]>(`${this.apiURL}/fornecedores`);
  }

  search(empresa: string, nome: string, cpfOuCnpj: string, dtCadastro: Date) {
    return this.http.get<Fornecedor[]>(`${this.apiURL}/fornecedores/search?empresa=${empresa}`);//&nome=${nome}&cpfOuCnpj=${cpfOuCnpj}&dtCadastro=${dtCadastro}
  }

  save(fornecedor: Fornecedor) {
    return this.http.post(`${this.apiURL}/fornecedores`, fornecedor);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/fornecedores/${id}`);
  }

  edit(fornecedor: Fornecedor) {
    return this.http.put(`${this.apiURL}/fornecedores/${fornecedor.id}`, fornecedor);
  }

}
