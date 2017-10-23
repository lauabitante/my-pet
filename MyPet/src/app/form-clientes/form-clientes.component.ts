import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { CrudClientesService } from "../crud-clientes.service";

@Component ({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})

export class FormClientesComponent implements OnInit {

  cliente: Cliente;
  codigo: number;
  hasError = false;  
  
  constructor (
        private service: CrudClientesService, 
        private router: Router, 
        private rota: ActivatedRoute ) { }

  ngOnInit() {
      this.codigo = this.rota.snapshot.params['cod'];

      if (isNaN(this.codigo)) {
            this.cliente = new Cliente();
      } else {
            this.cliente = Object.assign({},this.service.getClientePorCodigo(this.codigo));
      }
  }

  salvarCliente() {
      if (isNaN(this.codigo) && this.validaCampos()) {
            this.service.adicionarCliente(this.cliente);
            this.cliente = new Cliente();
            this.router.navigate(['/lista-clientes']);            
      } else if (this.validaCampos()) {
            this.service.atualizaCliente(this.codigo, this.cliente);
            this.router.navigate(['/lista-clientes']);         
      } else {
            this.hasError = true;
      }
  }

  cancelar() {
      this.cliente = new Cliente;
      this.hasError = false;      
  }

  voltar() {
        this.router.navigate(['/lista-clientes']);
  }

  validaCampos() {
      return this.cliente != null 
             && this.cliente.nome != "" && this.cliente.nome != null 
             && this.cliente.cpf != "" && this.cliente.cpf != null
             && this.cliente.email != "" && this.cliente.email != null
             && this.cliente.telefone != "" && this.cliente.telefone != null   
    }
}