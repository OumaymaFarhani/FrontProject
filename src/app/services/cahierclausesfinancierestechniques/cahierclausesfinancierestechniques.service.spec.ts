import { TestBed } from '@angular/core/testing';

import { CahierclausesfinancierestechniquesService } from './cahierclausesfinancierestechniques.service';

describe('CahierclausesfinancierestechniquesService', () => {
  let service: CahierclausesfinancierestechniquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CahierclausesfinancierestechniquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
