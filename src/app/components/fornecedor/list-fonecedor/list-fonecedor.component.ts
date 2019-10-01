import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Router } from '@angular/router';
import { TipoFornecedor } from 'src/app/models/enums/tipoFornecedor';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-fonecedor',
  templateUrl: './list-fonecedor.component.html',
  styleUrls: ['./list-fonecedor.component.scss']
})
export class ListFonecedorComponent implements OnInit {

  filtro: Fornecedor;
  fornecedores: Array<Fornecedor>;
  empresas: Array<Empresa>;

  tipoFornecedor: string = null;
  constructor(private fornecedorService: FornecedorService,
    private router: Router, private empresaService: EmpresaService) {
    this.filtro = new Fornecedor();
  }

  ngOnInit() {
    this.loadFornecedores();
    this.loadEmpresas();
  }

  loadFornecedores() {
    this.fornecedorService.get().subscribe(res => {
      this.fornecedores = res;
      console.log(res);
    });
  }

  loadEmpresas() {
    this.empresaService.get().subscribe(res => {
      this.empresas = res;
    });
  }
  delete(id: number) {
    this.fornecedorService.delete(id).subscribe(res => {
      console.log(`OK, ${res}`);
      this.loadFornecedores();
    }, error => {

    });
  }

  detail(id: string) {
    this.router.navigate(['fornecedor/detail'], { queryParams: { id: id } });
  }

  loadTF(tipo: number): string {

    if (tipo == TipoFornecedor.PessoaFisica) {
      this.tipoFornecedor = "Pessoa Física";
    } else if (tipo == TipoFornecedor.PessoaJuridica) {
      this.tipoFornecedor = "Pessoa Jurídica";
    }

    return this.tipoFornecedor;
  }

  filtar() {
    console.log(this.filtro);
    this.fornecedorService.search(this.filtro.empresa.id, this.filtro.nome, this.filtro.cpfOuCnpj, this.filtro.dtCadastro).subscribe(res => {
    this.fornecedores = res;
    });
  }
}
