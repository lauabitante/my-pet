import { Component, OnInit } from '@angular/core';

import { CrudTiposServicoService } from '../crud-tipo-servicos.service';
import { TipoServico } from '../tipo-servico';

@Component({
  selector: 'app-tela-cliente',
  templateUrl: './tela-cliente.component.html',
  styleUrls: ['./tela-cliente.component.css']
})

export class TelaClienteComponent implements OnInit {
  tiposServico: TipoServico[] = [];

  constructor(private serviceTiposServico: CrudTiposServicoService) { }

  ngOnInit() {
    this.loadTiposServico();
  }

  loadTiposServico() {
    this.serviceTiposServico.getTipoServico().subscribe(
      ts => { this.tiposServico = ts; },
      erro => { console.log(erro); }
    )
  }
}
