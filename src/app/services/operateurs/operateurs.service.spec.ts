import { TestBed } from '@angular/core/testing';

import { OperateursService } from './operateurs.service';

describe('OperateursService', () => {
  let service: OperateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
