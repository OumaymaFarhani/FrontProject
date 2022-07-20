import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesprojetListComponent } from './categoriesprojet-list.component';

describe('CategoriesprojetListComponent', () => {
  let component: CategoriesprojetListComponent;
  let fixture: ComponentFixture<CategoriesprojetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesprojetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesprojetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
