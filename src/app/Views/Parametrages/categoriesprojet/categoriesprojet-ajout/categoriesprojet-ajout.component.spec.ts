import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesprojetAjoutComponent } from './categoriesprojet-ajout.component';

describe('CategoriesprojetAjoutComponent', () => {
  let component: CategoriesprojetAjoutComponent;
  let fixture: ComponentFixture<CategoriesprojetAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesprojetAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesprojetAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
