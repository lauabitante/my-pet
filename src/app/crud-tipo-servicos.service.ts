import { Injectable } from '@angular/core';
import { TipoServico } from './tipo-servico';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudTiposServicoService {
  tiposServico: TipoServico[] = [];  

  urlTiposServico = 'https://mypet-backend.herokuapp.com/webresources/lista-tipos-servico/'; //verificar endpoint
  
  autoIncrement: number = 1;

  constructor(private http: Http) { }

  getTipoServico(): Observable<TipoServico[]>  {     
    return this.http.get(this.urlTiposServico)
    .map((res: Response) => res.json())
    .catch((erro:any) => Observable.throw(erro));
  }
  
  getTipoServicoPorCodigo(codigo: number): Observable<TipoServico> {
    return this.http.get(this.urlTiposServico+codigo)
    .map((res: Response) => res.json())
    .catch((erro:any) => Observable.throw(erro));
  }

  adicionarTipoServico(tipoServico: TipoServico): Observable<TipoServico> {
    tipoServico.codigo = this.autoIncrement++;
    return this.http.post(this.urlTiposServico, tipoServico)
    .map((res:Response) => {} )
    .catch((erro:any) => Observable.throw(erro));
  }

  removerTipoServico(tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.delete(this.urlTiposServico+tipoServico.codigo)
    .map((res:Response) => {})
    .catch((erro:any) => Observable.throw(erro))
  } 

  atualizaTipoServico(codigo:number, tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.put(this.urlTiposServico+codigo, tipoServico)
    .map((res:Response) => {})
    .catch((erro:any) => Observable.throw(erro))
  }
}