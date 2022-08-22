import { TestBed } from '@angular/core/testing';

import { CahierclausesadministrativesService } from './cahierclausesadministratives.service';

describe('CahierclausesadministrativesService', () => {
  let service: CahierclausesadministrativesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CahierclausesadministrativesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
