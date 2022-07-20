import { TestBed } from '@angular/core/testing';

import { NaturecritereService } from './naturecritere.service';

describe('NaturecritereService', () => {
  let service: NaturecritereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturecritereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
