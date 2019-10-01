import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/fornecedor';
import { TipoFornecedor } from 'src/app/models/enums/tipoFornecedor';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-fonecedor',
  templateUrl: './create-fonecedor.component.html',
  styleUrls: ['./create-fonecedor.component.scss']
})
export class CreateFonecedorComponent implements OnInit {

  title = "Novo fornecedor";
  tipos: TF[];
  labelTF: string = 'CPF/CNPJ';
  msg: string;

  fornecedor: Fornecedor;
  empresas: Empresa[];

  constructor(private empresaService: EmpresaService, private route: ActivatedRoute,
    private fornecedorService: FornecedorService, private router: Router) {
    this.fornecedor = new Fornecedor();
  }

  ngOnInit() {
    this.loadTF();
    this.loadEmpresas();

    this.route
      .queryParams
      .subscribe(params => {
        const { id } = params;
        if (id) {
          this.title = 'Editar fornecedor';
          this.loadFornecedor(id);
        }

      });
  }

  loadEmpresas() {
    this.empresaService.get().subscribe(res => {
      this.empresas = res;
    });
  }

  loadTF() {
    this.tipos = [
      { cod: 1, desc: "Pessoa Física" },
      { cod: 2, desc: "Pessoa Jurídica" }
    ]
  }

  LoadLabelCpfCnpj() {
    if (this.fornecedor.tipo == TipoFornecedor.PessoaFisica)
      this.labelTF = 'CPF';
    else if (this.fornecedor.tipo == TipoFornecedor.PessoaJuridica)
      this.labelTF = 'CNPJ';
    else
      this.labelTF = 'CPF/CNPJ';
  }

  loadFornecedor(id: string) {
    this.fornecedorService.getById(id).subscribe(res => {
      this.fornecedor = res;
      console.log(this.fornecedor);
    }, error => {
      console.log(error);
      this.msg = "erro ao carregar fornecedor";
    });
  }


  register() {
    if (this.validarSalvar()) {
      if (this.fornecedor.id)
        this.update();
      else
        this.save();
    }

  }

  save() {
    
    this.fornecedorService.save(this.fornecedor).subscribe(res => {
      console.log(`OK${res}`);
      this.router.navigate(['fornecedores']);
    }, error => {
      console.log(error)
      this.msg = "erro ao salvar fornecedor";
    });
  }

  update() {
    this.fornecedorService.edit(this.fornecedor).subscribe(res => {
      console.log(`OK${res}`);
      this.router.navigate(['fornecedores'])
    }, error => {
      console.log(error)
      this.msg = "erro ao atualizar fornecedor";
    });
  }

  validarSalvar(): boolean {
    let valid = true;
    if (this.fornecedor.tipo == TipoFornecedor.PessoaFisica) {
      if (!this.fornecedor.rg) {
        valid = false;
        this.msg = "campo RG é obrigatório para pessoa fisíca";
      }
      else if (!this.fornecedor.dtNascimento) {
        valid = false;
        this.msg = "campo Data de Nascimento é obrigatório para pessoa fisíca";
      }
      else {
        valid = true;
      }
    }

    if (!this.fornecedor.nome || (this.fornecedor.telefones.length == 0)
      || !this.fornecedor.tipo || !this.fornecedor.empresa || !this.fornecedor.cpfOuCnpj) {
      valid = false;
      this.msg = "os campos nome, telefone, empresa, cpf ou cnpj são obrigatórios"
    }
    return valid;
  }

  addPhone(tel: string) {
    this.fornecedor.telefones.push(tel);
  }

  dropPhone() {
    this.fornecedor.telefones.pop();
  }
}

interface TF {
  cod: number;
  desc: string;
}
