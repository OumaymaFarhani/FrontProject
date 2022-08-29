import { TestBed } from '@angular/core/testing';

import { TypecritereService } from './typecritere.service';

describe('TypecritereService', () => {
  let service: TypecritereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecritereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
