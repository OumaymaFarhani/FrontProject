import { TestBed } from '@angular/core/testing';

import { TypecahierchargesService } from './typecahiercharges.service';

describe('TypecahierchargesService', () => {
  let service: TypecahierchargesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecahierchargesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
