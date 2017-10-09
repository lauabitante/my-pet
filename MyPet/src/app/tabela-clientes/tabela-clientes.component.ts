import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private service:CrudClientesService, 
    private router: Router ) { }

 ngOnInit() {
        this.clientes = this.service.getClientes();
    }
    remover(cliente: Cliente) {
      this.service.removerCliente(cliente);
    }

  voltar() {
        this.router.navigate(['/tela-admin']);
  }
}