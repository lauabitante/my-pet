import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cliente } from './cliente'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/RX';

@Injectable()
export class CrudClientesService {

    clientes: Cliente[] = [];

    autoIncrement: number = 2;
    urlClientes = 'https://mypet-backend.herokuapp.com/webresources/clientes/';

    constructor(private http: Http) { }

    getClientes(): Observable<Cliente[]> {
        return this.http.get(this.urlClientes)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }

    getClientePorCodigo(codigo: number): Observable<Cliente> {
        return this.http.get(this.urlClientes+codigo)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }

    adicionarCliente(cliente: Cliente): Observable<Cliente> {
        cliente.codCliente=this.autoIncrement++;
        return this.http.post(this.urlClientes, cliente)
        .map((res:Response)=> {} )
        .catch((erro:any)=>Observable.throw(erro));
    }

    removerCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.delete(this.urlClientes+cliente.codCliente)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }

    atualizaCliente(codigo:number, cliente: Cliente): Observable<Cliente> {
        return this.http.put(this.urlClientes+codigo, cliente)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }
}