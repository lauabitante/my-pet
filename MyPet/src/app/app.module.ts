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
import { TabelaTipoServicosComponent } from './tabela-tipo-servicos/tabela-tipo-servicos.component';
import { CrudTipoServicosService} from './crud-tipo-servicos.service';
import { FormServicosComponent } from './form-servicos/form-servicos.component';
import { CrudServicosService } from './crud-servicos.service';
import { TabelaServicosComponent } from './tabela-servicos/tabela-servicos.component';

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
  { path: 'index', component: IndexComponent },
  { path: 'lista-tipo-servicos', component: TabelaTipoServicosComponent },
  { path: 'form-servicos', component: FormServicosComponent },
  { path: 'lista-servicos', component: TabelaServicosComponent},
  { path: 'edicao-servico/:cod', component: FormServicosComponent }
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
    IndexComponent,
    TabelaTipoServicosComponent,
    FormServicosComponent,
    TabelaServicosComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudClientesService, CrudFuncionariosService, CrudTipoServicosService, CrudServicosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
