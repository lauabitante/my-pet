import { TestBed, inject } from '@angular/core/testing';

import { CrudTipoServicosService } from './crud-tipo-servicos.service';

describe('ServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudTipoServicosService]
    });
  });

  it('should be created', inject([CrudTipoServicosService], (service: CrudTipoServicosService) => {
    expect(service).toBeTruthy();
  }));
});
