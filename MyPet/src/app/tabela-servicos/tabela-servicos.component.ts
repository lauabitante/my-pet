import { Component, OnInit } from '@angular/core';
import { Router,RouterLink} from '@angular/router';

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html',
  styleUrls: ['./tabela-servicos.component.css']
})
export class TabelaServicosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltar(){
        this.router.navigate(['/tela-cliente']);
  }
}
