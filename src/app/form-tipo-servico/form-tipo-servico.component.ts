import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoServico } from './../tipo-servico';
import { CrudTiposServicoService } from './../crud-tipo-servicos.service';

@Component ({
  selector: 'app-form-tipo-servico',
  templateUrl: './form-tipo-servico.component.html',
  styleUrls: ['./form-tipo-servico.component.css']
})

export class FormTipoServicoComponent implements OnInit {

  tipoServico: TipoServico;
  codigo: number;
  hasError = false;    

  constructor (
    private service: CrudTiposServicoService, 
    private router: Router,
    private rota: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    if (isNaN(this.codigo)) {
      this.tipoServico = new TipoServico();
    } else {
      this.service.getTipoServicoPorCodigo(this.codigo).subscribe(tipoServico => {
        this.tipoServico = tipoServico;
      });
    }
  }

  salvarTipoServico() { 
      if (isNaN(this.codigo) && this.validaCampos()) {
        this.service.adicionarTipoServico(this.tipoServico).subscribe(
          res => { 
            this.router.navigate(['/lista-tipos-servico']);  
          },
        erro => { console.log(erro) }
      );      
    } else if (this.validaCampos()) {
      this.service.atualizaTipoServico(this.tipoServico.codigo, this.tipoServico).subscribe(
        res => { 
          this.router.navigate(['/lista-tipos-servico']);     
        },
      erro => { console.log(erro) })  
    } else {
      this.hasError = true;
    }
  }

  cancelar() {
    this.tipoServico = new TipoServico;
    this.hasError = false;          
  }

  voltar() {
    this.router.navigate(['/lista-tipos-servico']);
  }

  validaCampos() {
    return this.tipoServico != null 
           && this.tipoServico.nome != "" && this.tipoServico.nome != null 
           && this.tipoServico.descricao != "" && this.tipoServico.descricao != null
           && this.tipoServico.valor != 0 && this.tipoServico.valor != null
  }
}