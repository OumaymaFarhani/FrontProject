import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresFinanciereEditComponent } from './criteres-financiere-edit.component';

describe('CriteresFinanciereEditComponent', () => {
  let component: CriteresFinanciereEditComponent;
  let fixture: ComponentFixture<CriteresFinanciereEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresFinanciereEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresFinanciereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
