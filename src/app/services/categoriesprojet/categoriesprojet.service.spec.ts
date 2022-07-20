import { TestBed } from '@angular/core/testing';

import { CategoriesprojetService } from './categoriesprojet.service';

describe('CategoriesprojetService', () => {
  let service: CategoriesprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
