import { TestBed } from '@angular/core/testing';

import { IntervallesServiceService } from './intervalles-service.service';

describe('IntervallesServiceService', () => {
  let service: IntervallesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervallesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
