import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListFonecedorComponent } from './components/fornecedor/list-fonecedor/list-fonecedor.component';
import { ListEmpresaComponent } from './components/empresa/list-empresa/list-empresa.component';
import { CreateFonecedorComponent } from './components/fornecedor/create-fonecedor/create-fonecedor.component';
import { CreateEmpresaComponent } from './components/empresa/create-empresa/create-empresa.component';
import { DetailFornecedorComponent } from './components/fornecedor/detail-fornecedor/detail-fornecedor.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fornecedores', component: ListFonecedorComponent },
  { path: 'fornecedor/create', component: CreateFonecedorComponent },
  { path: 'fornecedor/detail', component: DetailFornecedorComponent },
  { path: 'empresas', component: ListEmpresaComponent },
  { path: 'empresa/create', component: CreateEmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
