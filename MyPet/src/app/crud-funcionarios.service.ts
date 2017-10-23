import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';

@Injectable()
export class CrudFuncionariosService {
  funcionarios: Funcionario[] = [
      

  ];
  autoIncrement: number = 1;
  constructor() {
        if(!localStorage.getItem("funcionarios")){
                localStorage.setItem("funcionarios",JSON.stringify(this.funcionarios))
        }
    }
    getFuncionarios() {
         if(localStorage.getItem("funcionarios")){
                this.funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
         }
        return this.funcionarios;
    }

    getFuncionarioPorCodigo(codigo: number) {
        return(this.funcionarios.find(funcionario => funcionario.codigo == codigo));
    }

    adicionarFuncionario(funcionario: Funcionario) {
        funcionario.codigo = this.autoIncrement++;
        this.funcionarios.push(funcionario); 
        localStorage.setItem("funcionarios",JSON.stringify(this.funcionarios)); 
    }

    removerFuncionario(funcionario: Funcionario) {
        let indice = this.funcionarios.indexOf(funcionario, 0);
        if (indice >- 1) {
            localStorage.removeItem('funcionarios');
            this.funcionarios.splice(indice, 1);
        }
    }

    atualizaFuncionario(codigo: number, funcionario: Funcionario) {
        let indice = this.funcionarios.indexOf(this.getFuncionarioPorCodigo(codigo), 0);
        this.funcionarios[indice] = funcionario;
        localStorage.setItem("funcionarios",JSON.stringify(this.funcionarios));
    }
}
