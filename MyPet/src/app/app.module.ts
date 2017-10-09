import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { CrudClientesService} from './crud-clientes.service';
import { TelaAdminComponent } from './tela-admin/tela-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'tela-admin', component: TelaAdminComponent },  
  { path: 'lista-clientes', component: TabelaClientesComponent },
  { path: 'edicao-cliente/:cod', component: FormClientesComponent },
  { path: 'novo-cliente', component: FormClientesComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    TelaAdminComponent,
    TabelaClientesComponent,
    FormClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
