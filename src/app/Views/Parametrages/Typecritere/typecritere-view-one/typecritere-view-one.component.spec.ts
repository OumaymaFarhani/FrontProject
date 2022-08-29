import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecritereViewOneComponent } from './typecritere-view-one.component';

describe('TypecritereViewOneComponent', () => {
  let component: TypecritereViewOneComponent;
  let fixture: ComponentFixture<TypecritereViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecritereViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecritereViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
