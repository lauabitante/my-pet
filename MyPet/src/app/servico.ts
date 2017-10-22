import { Funcionario } from './funcionario';
import { TipoServico } from './tipo-servico';

export class Servico {
    codigo: number;
    cpfCliente: string;
    nomePet: string;
    dia: string;
    horario: string;
    funcionario: Funcionario;
    tipoServico: TipoServico;
    valorServico: number;
    observacao: string;
    status: boolean = false;
}