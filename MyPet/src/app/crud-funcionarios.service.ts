import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';

@Injectable()
export class CrudFuncionariosService {
    funcionarios: Funcionario[] = [
        {
            codigo:1, 
            nome:"João da Silva", 
            cpf:"123.456.789-10", 
            telefone:"91234-5678", 
            dataNascimento:"25/12/1994", 
            especialidade: "Tosa Canina" 
        },
        {
            codigo:2, 
            nome:"Maria Souza", 
            cpf:"109.987.654-32", 
            telefone:"99876-5432", 
            dataNascimento:"01/04/1990", 
            especialidade: "Veterinário" 
        }
  ];

  autoIncrement: number = 2;
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
            localStorage.removeItem('jogadores');
            this.funcionarios.splice(indice, 1);
        }
    }

    atualizaFuncionario(codigo: number, funcionario: Funcionario) {
        let indice = this.funcionarios.indexOf(this.getFuncionarioPorCodigo(codigo), 0);
        this.funcionarios[indice] = funcionario;
        localStorage.setItem("funcionarios",JSON.stringify(this.funcionarios));
    }
}
