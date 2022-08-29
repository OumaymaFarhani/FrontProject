import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecritereAjoutComponent } from './typecritere-ajout.component';

describe('TypecritereAjoutComponent', () => {
  let component: TypecritereAjoutComponent;
  let fixture: ComponentFixture<TypecritereAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecritereAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecritereAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
