import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresAjouterComponent } from './criteres-ajouter.component';

describe('CriteresAjoutComponent', () => {
  let component: CriteresAjouterComponent;
  let fixture: ComponentFixture<CriteresAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
