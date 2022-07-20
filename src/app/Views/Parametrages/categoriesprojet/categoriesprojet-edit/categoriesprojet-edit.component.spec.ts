import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesprojetEditComponent } from './categoriesprojet-edit.component';

describe('CategoriesprojetEditComponent', () => {
  let component: CategoriesprojetEditComponent;
  let fixture: ComponentFixture<CategoriesprojetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesprojetEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesprojetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
