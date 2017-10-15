import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { TipoServico } from '../tipoServico';
import { CrudTipoServicosService } from '../crud-tipo-servicos.service';

@Component({
  selector: 'app-tabela-tipo-servicos',
  templateUrl: './tabela-tipo-servicos.component.html',
  styleUrls: ['./tabela-tipo-servicos.component.css']
})
export class TabelaTipoServicosComponent implements OnInit {
  tipoServicos: TipoServico[] = [];
  constructor(private service:CrudTipoServicosService,private router:Router) { }

  ngOnInit() {
      this.tipoServicos = this.service.getServicos();
  }

  voltar(){
        this.router.navigate(['/tela-cliente']);
  }

}
