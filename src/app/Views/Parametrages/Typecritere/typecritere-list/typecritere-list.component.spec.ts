import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecritereListComponent } from './typecritere-list.component';

describe('TypecritereListComponent', () => {
  let component: TypecritereListComponent;
  let fixture: ComponentFixture<TypecritereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecritereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecritereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
