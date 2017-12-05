import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Funcionario } from './funcionario';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudFuncionariosService {

    urlFuncionarios = 'https://mypet-backend.herokuapp.com/webresources/funcionarios/';

    funcionarios: Funcionario[] = [];

    autoIncrement: number = 2;
    constructor(private http: Http) { }

    getFuncionarios(): Observable<Funcionario[]> {
        return this.http.get(this.urlFuncionarios)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }

    getFuncionarioPorCodigo(codigo: number): Observable<Funcionario> {
        return this.http.get(this.urlFuncionarios+codigo)
        .map((res: Response)=> res.json())
        .catch((erro:any)=>Observable.throw(erro));
    }

    adicionarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
        funcionario.codigo = this.autoIncrement++;
        return this.http.post(this.urlFuncionarios, funcionario)
        .map((res:Response)=> {} )
        .catch((erro:any)=>Observable.throw(erro));
    }

    removerFuncionario(funcionario: Funcionario): Observable<Funcionario> {
        return this.http.delete(this.urlFuncionarios+funcionario.codigo)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }

    atualizaFuncionario(codigo: number, funcionario: Funcionario): Observable<Funcionario> {
        return this.http.put(this.urlFuncionarios+codigo, funcionario)
        .map((res:Response)=> {})
        .catch((erro:any)=>Observable.throw(erro))
    }
}
