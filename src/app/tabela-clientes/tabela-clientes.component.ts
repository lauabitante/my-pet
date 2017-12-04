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
    private service: CrudClientesService, 
    private router: Router) { }

  ngOnInit() {
    this.loadClientes()
  }

  loadClientes() {
    this.service.getClientes().subscribe(
      clientes => { this.clientes = clientes; },
      erro => { console.log(erro); }
    )
  }

  adicionar() {
    this.router.navigate(['/novo-cliente']);
  }

  remover(cliente: Cliente) {
    this.service.removerCliente(cliente).subscribe(
      result => { 
        this.loadClientes()
       },
      erro => { console.log(erro); }
    )
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}