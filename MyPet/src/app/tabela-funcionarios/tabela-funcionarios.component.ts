import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { Funcionario } from "../funcionario";
import { CrudFuncionariosService } from "../crud-funcionarios.service";

@Component ({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})

export class TabelaFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  constructor (
    private service: CrudFuncionariosService,
    private router: Router ) { }

  ngOnInit() {
        this.funcionarios = this.service.getFuncionarios();
    }
  
  remover(funcionario: Funcionario){
      this.service.removerFuncionario(funcionario);
    }

  voltar(){
        this.router.navigate(['/tela-admin']);
  }
}