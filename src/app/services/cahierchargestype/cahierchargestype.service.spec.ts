import { TestBed } from '@angular/core/testing';

import { CahierchargestypeService } from './cahierchargestype.service';

describe('CahierchargestypeService', () => {
  let service: CahierchargestypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CahierchargestypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
