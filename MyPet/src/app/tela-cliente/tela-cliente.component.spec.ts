import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaClienteComponent } from './tela-cliente.component';

describe('TelaClienteComponent', () => {
  let component: TelaClienteComponent;
  let fixture: ComponentFixture<TelaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
