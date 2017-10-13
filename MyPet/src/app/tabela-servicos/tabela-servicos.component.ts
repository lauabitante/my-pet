import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { TipoServico } from '../tipoServico';
import { CrudServicosService } from '../crud-servicos.service';

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html',
  styleUrls: ['./tabela-servicos.component.css']
})
export class TabelaServicosComponent implements OnInit {
  tipoServicos: TipoServico[] = [];
  constructor(private service:CrudServicosService,private router:Router) { }

  ngOnInit() {
      this.tipoServicos = this.service.getServicos();
  }

  voltar(){
        this.router.navigate(['/tela-cliente']);
  }

}
