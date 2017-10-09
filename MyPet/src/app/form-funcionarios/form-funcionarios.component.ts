import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from '../funcionario';
import { CrudFuncionariosService } from "../crud-funcionarios.service";

@Component ({
  selector: 'app-form-funcionarios',
  templateUrl: './form-funcionarios.component.html',
  styleUrls: ['./form-funcionarios.component.css']
})

export class FormFuncionariosComponent implements OnInit {
  funcionario:Funcionario;
  codigo: number;
  
  constructor (
    private servico:CrudFuncionariosService, 
    private router:Router, 
    private rota:ActivatedRoute ) { }

  ngOnInit() {
      this.codigo = this.rota.snapshot.params['cod'];
      if (isNaN(this.codigo)) {
        this.funcionario = new Funcionario();
      } else {
        this.funcionario = Object.assign({},this.servico.getFuncionarioPorCodigo(this.codigo));
      }
  }

  salvarFuncionario() {
    if (isNaN(this.codigo)) {
      this.servico.adicionarFuncionario(this.funcionario);
      this.funcionario = new Funcionario();
    } else {
      this.servico.atualizaFuncionario(this.codigo, this.funcionario);
    }
    this.router.navigate(['/lista-funcionarios']);
  }

  cancelar() {
    this.funcionario = new Funcionario;
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}