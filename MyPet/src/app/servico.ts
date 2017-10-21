import { Funcionario } from './funcionario';


export class Servico {
    codigo:number;
    cpfCliente:string;
    nomePet:string;
    dia:string;
    horario:string;
    funcionario: Funcionario;
    tipoServico:string;
    valorServico:number;
    observacao:string;
    status: boolean = false;
}
