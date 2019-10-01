import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmpresaComponent } from './create-empresa/create-empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';
import { EmpresaService } from 'src/app/services/empresa.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';

@NgModule({
  declarations: [CreateEmpresaComponent, ListEmpresaComponent],
  imports: [
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers:[EmpresaService, CepService]
})
export class EmpresaModule { }
