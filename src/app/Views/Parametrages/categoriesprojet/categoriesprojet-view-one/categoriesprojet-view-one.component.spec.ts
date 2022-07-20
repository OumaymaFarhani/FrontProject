import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesprojetViewOneComponent } from './categoriesprojet-view-one.component';

describe('CategoriesprojetViewOneComponent', () => {
  let component: CategoriesprojetViewOneComponent;
  let fixture: ComponentFixture<CategoriesprojetViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesprojetViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesprojetViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
