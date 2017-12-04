import { Injectable } from '@angular/core';
import { Servico } from './servico';
import { Funcionario } from './funcionario';
import {TipoServico } from './tipo-servico';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/RX';

@Injectable()
export class CrudServicosService {
  servicos: Servico[] = [];

  urlServicos = 'https://mypet-backend.herokuapp.com/webresources/servicos/'; //verificar endpoint

  autoIncrement: number = 2;

  constructor(private http: Http) { }

    getServicos(): Observable<Servico[]>  {
        return this.http.get(this.urlServicos)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }
    getServicoPorCodigo(codigo: number): Observable<Servico> {
        return this.http.get(this.urlServicos+codigo)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }

    adicionarServico(servico: Servico): Observable<Servico> {
        servico.codigo=this.autoIncrement++;
        return this.http.post(this.urlServicos, servico)
        .map((res:Response)=> {} )
        .catch((erro:any)=>Observable.throw(erro));
    }

    removerServico(servico: Servico): Observable<Servico> {
        return this.http.delete(this.urlServicos+servico.codigo)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }

    atualizaServico(codigo:number, servico:Servico): Observable<Servico> {
        return this.http.put(this.urlServicos+codigo, servico)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }
}