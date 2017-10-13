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
import { IndexComponent } from './index/index.component';
import { TelaClienteComponent } from './tela-cliente/tela-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'tela-admin', component: TelaAdminComponent }, 
  { path: 'tela-cliente', component: TelaClienteComponent}, 
  { path: 'lista-clientes', component: TabelaClientesComponent },
  { path: 'edicao-cliente/:cod', component: FormClientesComponent },
  { path: 'novo-cliente', component: FormClientesComponent },
  { path: 'lista-funcionarios', component: TabelaFuncionariosComponent },
  { path: 'edicao-funcionario/:cod', component: FormFuncionariosComponent },
  { path: 'novo-funcionario', component: FormFuncionariosComponent },
  { path: 'index', component: IndexComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    TelaAdminComponent,
    TelaClienteComponent,
    TabelaClientesComponent,
    FormClientesComponent,
    TabelaFuncionariosComponent,
    FormFuncionariosComponent,
    IndexComponent    
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
