import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Servico } from '../servico';
import { CrudServicosService } from '../crud-servicos.service';
import { CrudFuncionariosService } from '../crud-funcionarios.service';
import { CrudTiposServicoService } from '../crud-tipo-servicos.service';
import { Funcionario } from '../funcionario';
import { TipoServico } from '../tipo-servico';

@Component ({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})

export class FormServicosComponent implements OnInit {
  servico: Servico;
  codigo: number;
  valor:number = 0;
  funcionarios: Funcionario[] = [];
  tipoServicos: TipoServico[] = [];  

  constructor (
    private service: CrudServicosService,
    private serviceFuncionario: CrudFuncionariosService,
    private serviceTiposServico: CrudTiposServicoService, 
    private router: Router,
    private rota: ActivatedRoute 
  ) { }

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
      this.servico.tipoServico = new TipoServico();
      this.funcionarios = this.serviceFuncionario.getFuncionarios();
      this.tipoServicos = this.serviceTiposServico.getTiposServico();
  }

  atualizaValor(valor:number){
      this.valor = valor;

  }
  cancelar() {
    this.servico = new Servico;
    this.valor = 0;
  }
  voltar() {
    this.router.navigate(['/tela-cliente']);
  }
}