import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { CrudClientesService} from './crud-clientes.service';
import { TelaAdminComponent } from './tela-admin/tela-admin.component';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';
import { FormFuncionariosComponent } from './form-funcionarios/form-funcionarios.component';
import { CrudFuncionariosService } from './crud-funcionarios.service';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'tela-admin', component: TelaAdminComponent },  
  { path: 'lista-clientes', component: TabelaClientesComponent },
  { path: 'edicao-cliente/:cod', component: FormClientesComponent },
  { path: 'novo-cliente', component: FormClientesComponent } ,
  { path: 'lista-funcionarios', component: TabelaFuncionariosComponent },
  { path: 'edicao-funcionario/:cod', component: FormFuncionariosComponent },
  { path: 'novo-funcionario', component: FormFuncionariosComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    TelaAdminComponent,
    TabelaClientesComponent,
    FormClientesComponent,
    TabelaFuncionariosComponent,
    FormFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudClientesService, CrudFuncionariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
