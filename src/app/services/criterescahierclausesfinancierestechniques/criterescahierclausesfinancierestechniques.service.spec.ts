import { TestBed } from '@angular/core/testing';

import { CriterescahierclausesfinancierestechniquesService } from './criterescahierclausesfinancierestechniques.service';

describe('CriterescahierclausesfinancierestechniquesService', () => {
  let service: CriterescahierclausesfinancierestechniquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriterescahierclausesfinancierestechniquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
