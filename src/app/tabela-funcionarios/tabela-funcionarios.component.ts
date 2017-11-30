import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    private router: Router,
    private http: HttpClient ) { }

    ngOnInit() {
      this.http.get<Funcionario[]>('https://mypet-backend.herokuapp.com/webresources/funcionarios').subscribe(funcionarios => {
        this.funcionarios = funcionarios;
      });
    }

  adicionar() {
    this.router.navigate(['/novo-funcionario']);
  }
  
  remover(funcionario: Funcionario) {
    this.service.removerFuncionario(funcionario);
  }

  voltar() {
        this.router.navigate(['/tela-admin']);
  }
}