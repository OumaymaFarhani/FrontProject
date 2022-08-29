import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecritereEditComponent } from './typecritere-edit.component';

describe('TypecritereEditComponent', () => {
  let component: TypecritereEditComponent;
  let fixture: ComponentFixture<TypecritereEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecritereEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecritereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
