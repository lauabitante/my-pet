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
      this.service.getTipoServico().subscribe(
        tiposServico => { this.tiposServico = tiposServico; },
      erro => { console.log(erro); }
    )
  }

  adicionar() {
    this.router.navigate(['/novo-tipo-servico']);
  }

  remover(tipoServico: TipoServico) {
    this.service.removerTipoServico(tipoServico).subscribe (
      result => { 
        // Atualizar a tela
       },
      erro => { console.log(erro); }
    )
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}