import { TestBed, inject } from '@angular/core/testing';

import { CrudFuncionariosService } from './crud-funcionarios.service';

describe('CrudFuncionariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudFuncionariosService]
    });
  });

  it('should be created', inject([CrudFuncionariosService], (service: CrudFuncionariosService) => {
    expect(service).toBeTruthy();
  }));
});
