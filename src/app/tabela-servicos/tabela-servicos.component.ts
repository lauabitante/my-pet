import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../servico';
import { CrudServicosService } from '../crud-servicos.service';

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html',
  styleUrls: ['./tabela-servicos.component.css']
})
export class TabelaServicosComponent implements OnInit {
  servicos:Servico[] = [];
  constructor(private service: CrudServicosService, private router:Router) { }

  ngOnInit() {
      this.servicos = this.service.getServicos();
  }

  remover(servico: Servico) {
    this.service.removerServico(servico);
  }

  voltar() {
    this.router.navigate(['/tela-admin']);
  }
}
