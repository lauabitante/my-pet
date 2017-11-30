import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente'
@Injectable()
export class CrudClientesService {

 clientes: Cliente[] = [];

  autoIncrement: number = 2;
  urlClientes = 'https://mypet-backend.herokuapp.com/webresources/clientes/';

  constructor(private http: HttpClient) { }
    getClientes(){
        this.http.get<Cliente[]>(this.urlClientes).subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    adicionarCliente(cliente: Cliente) {
        cliente.codigo=this.autoIncrement++;
        this.http.post(this.urlClientes, cliente).subscribe(response => {
            this.clientes.push(cliente);  
        });
    }

    getClientePorCodigo(codigo: number) {
        return(this.clientes.find(cliente => cliente.codigo==codigo));
    }

    removerCliente(cliente: Cliente) {
        this.http.get(this.urlClientes+cliente.cpf).subscribe(cliente => {
            console.log("CLIENTE:", cliente);
            this.http.delete(this.urlClientes+cliente['codCliente']).subscribe(result => { 
                console.log("DELETE RESPONSE", result)
            });
        });
    }

    atualizaCliente(codigo:number, cliente: Cliente) {
        let indice = this.clientes.indexOf(this.getClientePorCodigo(codigo), 0);
        console.log("CLIENTE:", cliente);
        this.http.put<Cliente>(this.urlClientes+cliente.codigo, cliente).subscribe(cliente => { 
            this.clientes[indice] = cliente;
        });
    }
}