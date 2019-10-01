import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styleUrls: ['./list-empresa.component.scss']
})
export class ListEmpresaComponent implements OnInit {
  empresas: Array<Empresa>;

  constructor(private empresaService: EmpresaService, private router: Router ) { }

  ngOnInit() {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresaService.get().subscribe(res => {
      this.empresas = res;
    });
  }

  delete(id: number) {
    this.empresaService.delete(id).subscribe(res => {
      console.log(`OK, ${res}`);
      this.loadEmpresas();
    }, error => {

    });
  }

  edit(id: string) {
    this.router.navigate(['empresa/create'], { queryParams: { id: id } });
  }

}
