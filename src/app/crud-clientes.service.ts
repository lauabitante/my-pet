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
        return new Promise<Cliente>(function(resolve, reject) {
            return this.http.get(this.urlClientes+codigo).subscribe(response => {
                return resolve(response[0])
            });
        })
    }

    removerCliente(cliente: Cliente) {
        this.http.get(this.urlClientes+cliente.cpf).subscribe(cliente => {
            this.http.delete(this.urlClientes+cliente['codCliente']).subscribe(result => { });
        });
    }

    atualizaCliente(codigo:number, cliente: Cliente) {
        this.getClientePorCodigo(codigo).then(cliente => {
            this.http.put<Cliente>(this.urlClientes+cliente['codigo'], cliente).subscribe(cliente => { 
                // this.clientes[indice] = cliente;
            })
        });
    }
}