import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoServico } from './../tipo-servico';
import { CrudTipoServicosService } from './../crud-tipo-servicos.service';

@Component ({
  selector: 'app-form-tipo-servico',
  templateUrl: './form-tipo-servico.component.html',
  styleUrls: ['./form-tipo-servico.component.css']
})

export class FormTipoServicoComponent implements OnInit {

  tipoServico: TipoServico;
  codigo: number;

  constructor (
    private service: CrudTipoServicosService, 
    private router: Router,
    private rota: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    if (isNaN(this.codigo)) {
      this.tipoServico = new TipoServico();
    } else {
      this.tipoServico = Object.assign({},this.service.getTipoServicoPorCodigo(this.codigo));
    }
  }

  salvarTipoServico() { 
      if (isNaN(this.codigo)) {
      this.service.adicionarTipoServico(this.tipoServico);
      this.tipoServico = new TipoServico();
    } else {
      this.service.atualizarTipoServico(this.codigo, this.tipoServico);
    }
    this.router.navigate(['/lista-tipos-servico']);
  }

  cancelar() {
    this.tipoServico = new TipoServico;
  }

  voltar() {
    this.router.navigate(['/lista-tipos-servico']);
  }
}