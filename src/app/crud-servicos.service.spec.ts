import { TestBed, inject } from '@angular/core/testing';

import { CrudServicosService } from './crud-servicos.service';

describe('CrudServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudServicosService]
    });
  });

  it('should be created', inject([CrudServicosService], (service: CrudServicosService) => {
    expect(service).toBeTruthy();
  }));
});
