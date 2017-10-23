import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoServico } from '../tipo-servico';
import { CrudTiposServicoService } from '../crud-tipo-servicos.service';

@Component ({
  selector: 'app-tabela-tipo-servicos',
  templateUrl: './tabela-tipo-servicos.component.html',
  styleUrls: ['./tabela-tipo-servicos.component.css']
})

export class TabelaTipoServicosComponent implements OnInit {
  tiposServico: TipoServico[] = [];
  constructor(private service: CrudTiposServicoService,private router:Router) { }

  ngOnInit() {
      this.tiposServico = this.service.getTiposServico();
  }

  adicionar() {
    this.router.navigate(['/edicao-tipo-servico/:cod']);
  }

  remover(tipoServico: TipoServico) {
    this.service.removerTipoServico(tipoServico);
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}