import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { CrudClientesService} from './crud-clientes.service';

const routes: Routes = [
  { path: '', redirectTo: 'tela-funcionario', pathMatch: 'full'},
  { path: 'lista-clientes', component: TabelaClientesComponent },
  { path: 'edicaoCliente/:cod', component: FormClientesComponent },
  { path: 'novoCliente', component: FormClientesComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
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
