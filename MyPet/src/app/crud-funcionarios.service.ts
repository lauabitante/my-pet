import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';

@Injectable()
export class CrudFuncionariosService {
  funcionarios: Funcionario[] = [
      {codigo:1, nome:"teste", cpf:"123.456.789-10", telefone:"1234-5678", dataNascimento:"25/12/1994", especialidade: "veterinário" }

  ];
  autoIncrement: number = 2;
  constructor() { }
    getFuncionarios() {
        return this.funcionarios;
    }

    getFuncionarioPorCodigo(codigo: number) {
        return(this.funcionarios.find(funcionario => funcionario.codigo == codigo));
    }

    adicionarFuncionario(funcionario: Funcionario) {
        funcionario.codigo = this.autoIncrement++;
        this.funcionarios.push(funcionario);  
    }

    removerFuncionario(funcionario: Funcionario) {
        let indice = this.funcionarios.indexOf(funcionario, 0);
        if (indice >- 1) {
            this.funcionarios.splice(indice, 1);
        }
    }

    atualizaFuncionario(codigo: number, funcionario: Funcionario) {
        let indice = this.funcionarios.indexOf(this.getFuncionarioPorCodigo(codigo), 0);
        this.funcionarios[indice] = funcionario;
    }
}
