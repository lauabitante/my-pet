import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../cliente';
import { CrudClientesService } from '../crud-clientes.service';

@Component ({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})

export class TabelaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor (
    private service: CrudClientesService, 
    private router: Router,
    private http: HttpClient ) { }

  ngOnInit() {
    this.http.get<Cliente[]>('https://mypet-backend.herokuapp.com/webresources/clientes').subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  adicionar() {
    this.router.navigate(['/novo-cliente']);
  }

  remover(cliente: Cliente) {
    this.service.removerCliente(cliente);
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}