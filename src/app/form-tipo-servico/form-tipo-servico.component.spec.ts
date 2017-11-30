import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoServicoComponent } from './form-tipo-servico.component';

describe('FormTipoServicoComponent', () => {
  let component: FormTipoServicoComponent;
  let fixture: ComponentFixture<FormTipoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
