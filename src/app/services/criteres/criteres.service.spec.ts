import { TestBed } from '@angular/core/testing';

import { CriteresService } from './criteres.service';

describe('CriteresService', () => {
  let service: CriteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
