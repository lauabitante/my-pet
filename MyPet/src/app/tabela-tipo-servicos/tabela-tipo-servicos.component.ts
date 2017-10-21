import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TipoServico } from '../tipo-servico';
import { CrudTipoServicosService } from '../crud-tipo-servicos.service';

@Component ({
  selector: 'app-tabela-tipo-servicos',
  templateUrl: './tabela-tipo-servicos.component.html',
  styleUrls: ['./tabela-tipo-servicos.component.css']
})

export class TabelaTipoServicosComponent implements OnInit {
  tiposServico: TipoServico[] = [];
  constructor(private service: CrudTipoServicosService,private router:Router) { }

  ngOnInit() {
      this.tiposServico = this.service.getTiposServico();
  }

  adicionar() {
    this.router.navigate(['/edicao-tipo-servico/:cod']);
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}