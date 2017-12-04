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
  valor: number = 0;
  funcionarios: Funcionario[] = [];
  tipoServicos: TipoServico[] = [];  
  hasError = false;  

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
      if (isNaN(this.codigo) && this.validaCampos()) {
      this.service.adicionarServico(this.servico);
      this.servico = new Servico();
      this.router.navigate(['/tela-cliente']);      
    } else if (this.validaCampos()) {
      this.service.atualizaServico(this.codigo, this.servico);
      this.router.navigate(['/tela-cliente']);      
    } else {
      this.hasError = true;
    }
  }

  iniciarServico() {
      this.servico = new Servico();
      this.servico.funcionario = new Funcionario();
      this.servico.tipoServico = new TipoServico();
      this.serviceFuncionario.getFuncionarios().subscribe(
        funcionarios => { this.funcionarios = funcionarios; },
        erro => { console.log(erro); }
      )
      this.tipoServicos = this.serviceTiposServico.getTiposServico();
  }

  atualizaValor(valor: number) {
      this.valor = valor;
  }

  cancelar() {
    this.servico = new Servico;
    this.valor = 0;
    this.hasError = false;
  }
  
  voltar() {
    this.router.navigate(['/tela-cliente']);
  }

  validaCampos() {
    return this.servico != null 
           && this.servico.cpfCliente != "" && this.servico.cpfCliente != null
           && this.servico.dia != "" && this.servico.dia != null 
           && this.servico.horario && this.servico.horario != null
           && this.servico.nomePet != "" && this.servico.nomePet != null
           && this.servico.tipoServico != null    
           && this.servico.funcionario != null       
  }
}