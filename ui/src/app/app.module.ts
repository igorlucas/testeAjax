import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './components/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { EmpresaModule } from './components/empresa/empresa.module';
import { FornecedorModule } from './components/fornecedor/fornecedor.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    MaterialModule,
    EmpresaModule,
    FornecedorModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
