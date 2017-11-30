import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTipoServicosComponent } from './tabela-tipo-servicos.component';

describe('TabelaServicosComponent', () => {
  let component: TabelaTipoServicosComponent;
  let fixture: ComponentFixture<TabelaTipoServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTipoServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTipoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
