import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { CepService } from 'src/app/services/cep.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.scss']
})
export class CreateEmpresaComponent implements OnInit {

  title = "Nova Empresa";
  empresa: Empresa;
  showEnd: boolean = false;
  msg: string;

  constructor(private route: ActivatedRoute, private cepService: CepService, private empresaService: EmpresaService, private router: Router) {
    this.empresa = new Empresa();
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        const { id } = params;
        if (id) {
          this.title = 'Editar empresa';
          this.loadEmpresa(id);
        }

      });
  }

  loadEnd() {
    if (this.empresa.cep == "" || this.empresa.cep == null)
      this.msg = "cep deve ser informado";
    else {
      this.cepService.get(this.empresa.cep).subscribe(res => {
        this.empresa.localidade = res.localidade;
        this.empresa.logradouro = res.logradouro;
        this.empresa.uf = res.uf;
      }, error => {
        this.msg = "erro ao carregar endereço"
        console.log(error);
      });
    }
  }

  register() {

    if (this.empresa.id)
      this.update();
    else
      this.save();
  }

  save() {
    this.empresaService.save(this.empresa).subscribe(res => {
      console.log(`OK, ${res}`);
      this.router.navigate(['empresas']);
    }, error => { });
  }

  update() {
    this.empresaService.edit(this.empresa).subscribe(res => {
      console.log(`OK, ${res}`);
      this.router.navigate(['empresas']);
    }, error => { });
  }

  loadEmpresa(id: String) {
    this.empresaService.getById(id).subscribe(res => {
      this.empresa = res;
    });
  }
}
