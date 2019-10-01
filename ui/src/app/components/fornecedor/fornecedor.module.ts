import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFonecedorComponent } from './list-fonecedor/list-fonecedor.component';
import { CreateFonecedorComponent } from './create-fonecedor/create-fonecedor.component';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { DetailFornecedorComponent } from './detail-fornecedor/detail-fornecedor.component';

@NgModule({
  declarations: [ListFonecedorComponent, CreateFonecedorComponent, DetailFornecedorComponent],
  imports: [
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers:[FornecedorService]
})
export class FornecedorModule { }
