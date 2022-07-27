import { TestBed } from '@angular/core/testing';

import { CahierchargesService } from './cahiercharges.service';

describe('CahierchargesService', () => {
  let service: CahierchargesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CahierchargesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
