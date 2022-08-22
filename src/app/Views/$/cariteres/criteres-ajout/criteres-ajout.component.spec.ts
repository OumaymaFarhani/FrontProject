import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresAjoutComponent } from './criteres-ajout.component';

describe('CriteresAjoutComponent', () => {
  let component: CriteresAjoutComponent;
  let fixture: ComponentFixture<CriteresAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
