import { Injectable } from '@angular/core';
import { Servico } from './servico';

@Injectable()
export class CrudServicosService {
  servicos:Servico[] = [
       {
           codigo:1, 
           cpfCliente:"teste", 
           nomePet:"123.456.789-10", 
           dia:"1234-5678", 
           horario:"25/12/1994", 
           nomeFuncionario: "veterinário", 
           tipoServico:"", 
           valorServico:30, 
           observacao:"", 
           status:false   
        }
  ];
  autoIncrement: number = 2;

  constructor() { }

    getServicos(){
        return this.servicos;
    }
    getServicoPorCodigo(codigo:number){
        return(this.servicos.find(servico => servico.codigo==codigo));
    }

    adicionarServico(servico:Servico){
        servico.codigo=this.autoIncrement++;
        this.servicos.push(servico);  
    }

    removerServico(servico:Servico){
        let indice = this.servicos.indexOf(servico, 0);
        if(indice >-1){
            this.servicos.splice(indice, 1);
        }
    }

    atualizaServico(codigo:number, servico:Servico){
        let indice = this.servicos.indexOf(this.getServicoPorCodigo(codigo), 0);
        this.servicos[indice] = servico;
    }
}