import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Servico } from '../servico';
import { CrudServicosService } from '../crud-servicos.service';
import { CrudFuncionariosService } from '../crud-funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})
export class FormServicosComponent implements OnInit {
  servico:Servico;
  codigo:number;
  funcionarios: Funcionario[] =[];
  constructor(private service: CrudServicosService, private serviceFuncionario: CrudFuncionariosService,
               private router:Router,private rota:ActivatedRoute ) { }

  ngOnInit() {
    this.iniciarServico();
    this.codigo = this.rota.snapshot.params['cod'];
      if (isNaN(this.codigo)) {
        this.servico = new Servico();
      } else {
        this.servico = Object.assign({},this.service.getServicoPorCodigo(this.codigo));
      }
  }
  
  salvarServico() { 
      if (isNaN(this.codigo)) {
      this.service.adicionarServico(this.servico);
      this.servico = new Servico();
    } else {
      this.service.atualizaServico(this.codigo, this.servico);
    }

    this.router.navigate(['/tela-cliente']);
  }

  iniciarServico(){
      this.servico = new Servico();
      this.servico.funcionario = new Funcionario();
      this.funcionarios = this.serviceFuncionario.getFuncionarios();

  }
  cancelar() {
    this.servico = new Servico;
  }
  voltar() {
    this.router.navigate(['/tela-cliente']);
  }
}
