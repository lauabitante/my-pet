import { Injectable } from '@angular/core';

import { Servico } from './servico';

@Injectable()
export class CrudServicosService {
  servicos: Servico[] = [
      {codigo: 1, nome:"Tosa" ,descricao:"Banho no seu pet com aparação dos pelos conforme pedido do cliente", valor: 30.0}

  ];
    autoIncrement: number = 2;

  constructor() { }
  
  getServicos(){
    return this.servicos;
  }
}
