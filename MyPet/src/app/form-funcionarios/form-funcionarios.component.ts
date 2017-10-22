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
  funcionario: Funcionario;
  codigo: number;
  hasError = false;
  
  constructor (
    private service:CrudFuncionariosService, 
    private router:Router, 
    private rota:ActivatedRoute ) { }

  ngOnInit() {
      this.codigo = this.rota.snapshot.params['cod'];
      if (isNaN(this.codigo)) {
        this.funcionario = new Funcionario();
      } else {
        this.funcionario = Object.assign({},this.service.getFuncionarioPorCodigo(this.codigo));
      }
  }

  salvarFuncionario() {
    if (isNaN(this.codigo) && this.validaCampos()) {
      this.service.adicionarFuncionario(this.funcionario);
      this.funcionario = new Funcionario();
      this.router.navigate(['/lista-funcionarios']);
    } else if (this.validaCampos()) {
      this.service.atualizaFuncionario(this.codigo, this.funcionario);
      this.router.navigate(['/lista-funcionarios']);
    } else {
      this.hasError = true;
    }
  }

  cancelar() {
    this.funcionario = new Funcionario;
    this.hasError = false;
  }

  voltar() {
    this.router.navigate(['/lista-funcionarios']);
  }

  validaCampos() {
    return this.funcionario != null 
           && this.funcionario.nome != "" && this.funcionario.nome != null 
           && this.funcionario.cpf != "" && this.funcionario.cpf != null 
           && this.funcionario.dataNascimento != "" && this.funcionario.dataNascimento != null
           && this.funcionario.especialidade != "" && this.funcionario.especialidade != null
           && this.funcionario.telefone != "" && this.funcionario.telefone != null
  }
}