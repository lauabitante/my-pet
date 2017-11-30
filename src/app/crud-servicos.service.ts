import { Injectable } from '@angular/core';
import { Servico } from './servico';
import { Funcionario } from './funcionario';
import {TipoServico } from './tipo-servico';

@Injectable()
export class CrudServicosService {
  servicos: Servico[] = [
    // {
    //     codigo: 1, 
    //     cpfCliente: "Banho", 
    //     nomePet: "Totó", 
    //     dia: "01/01/2008", 
    //     horario: "12:00", 
    //     funcionario: new Funcionario(), 
    //     tipoServico: new TipoServico(), 
    //     valorServico: 30.0, 
    //     observacao: "Alergia", 
    //     status: false
    // }
  ];

  autoIncrement: number = 2;

  constructor() { }
    getServicos() {
        return this.servicos;
    }
    getServicoPorCodigo(codigo: number) {
        return (this.servicos.find(servico => servico.codigo == codigo));
    }

    adicionarServico(servico: Servico) {
        servico.codigo=this.autoIncrement++;
        this.servicos.push(servico);  
    }

    removerServico(servico: Servico) {
        let indice = this.servicos.indexOf(servico, 0);
        if (indice >- 1) {
            this.servicos.splice(indice, 1);
        }
    }

    atualizaServico(codigo:number, servico:Servico){
        let indice = this.servicos.indexOf(this.getServicoPorCodigo(codigo), 0);
        this.servicos[indice] = servico;
    }
}