import { Injectable } from '@angular/core';

import { Servico } from './servico';
@Injectable()
export class CrudServicosService {
  servicos:Servico[] = [
       {codigo:1, cpfCliente:"teste", nomePet:"123.456.789-10", dia:"1234-5678", horario:"25/12/1994", nomeFuncionario: "veterinário", tipoServico:"", valorServico:30, observacao:"", status:false   }

  ];
  autoIncrement: number = 1;

  constructor() { }

  adicionarServico(servico:Servico){
        servico.codigo=this.autoIncrement++;
        this.servicos.push(servico);  
    }

    

}
