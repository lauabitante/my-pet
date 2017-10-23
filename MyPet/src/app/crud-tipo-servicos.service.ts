import { Injectable } from '@angular/core';
import { TipoServico } from './tipo-servico';

@Injectable()
export class CrudTiposServicoService {
  tiposServico: TipoServico[] = [
    {
      codigo: 1, 
      nome: "Tosa",
      descricao: "Banho no seu pet com aparação dos pelos conforme pedido do cliente", 
      valor: 40.0
    },
    {
      codigo: 2,
      nome: "Banho",
      descricao: "Seu pet sai cheiroso e sequinho do nosso banho com produtos....",
      valor: 20.0
    }
  ];
    autoIncrement: number = 2;

  constructor() { 
  }
  
  getTiposServico() {
    return this.tiposServico;
  }

  getTipoServicoPorCodigo(codigo: number) {
    return (this.tiposServico.find(servico => servico.codigo == codigo));
  }

  adicionarTipoServico(servico: TipoServico) {
    servico.codigo = this.autoIncrement++;
    this.tiposServico.push(servico);  
  }

  removerTipoServico(servico: TipoServico) {
    let indice = this.tiposServico.indexOf(servico, 0);
    if (indice >- 1) {
      this.tiposServico.splice(indice, 1);
    }
  }

  atualizarTipoServico(codigo: number, servico: TipoServico){
    let indice = this.tiposServico.indexOf(this.getTipoServicoPorCodigo(codigo), 0);
    this.tiposServico[indice] = servico;
  }
}