import { TestBed } from '@angular/core/testing';

import { CriterescahierclausesadministrativesService } from './criterescahierclausesadministratives.service';

describe('CriterescahierclausesadministrativesService', () => {
  let service: CriterescahierclausesadministrativesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriterescahierclausesadministrativesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
