import { TestBed } from '@angular/core/testing';

import { IntervallestypeServiceService } from './intervallestype-service.service';

describe('IntervallestypeServiceService', () => {
  let service: IntervallestypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervallestypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
