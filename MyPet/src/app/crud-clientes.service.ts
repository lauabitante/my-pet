import { Injectable } from '@angular/core';

import { Cliente } from './cliente'
@Injectable()
export class CrudClientesService {

 clientes: Cliente[] = [
      {codigo:1, nome:"Teste", cpf:"123.456.789-10", telefone:"1234-5678", email:"teste@teste.com" }

  ];
  autoIncrement: number = 2;
  constructor() { }
    getClientes(){
        return this.clientes;
    }

    adicionarCliente(cliente:Cliente){
        cliente.codigo=this.autoIncrement++;
        this.clientes.push(cliente);  
    }

    getClientePorCodigo(codigo:number){
        return(this.clientes.find(cliente => cliente.codigo==codigo));
    }

    removerCliente(cliente:Cliente){
        let indice = this.clientes.indexOf(cliente, 0);
        if(indice >-1){
            this.clientes.splice(indice, 1);
        }
    }

    atualizaCliente(codigo:number, cliente:Cliente){
        let indice = this.clientes.indexOf(this.getClientePorCodigo(codigo), 0);
        this.clientes[indice] = cliente;
    }
}
