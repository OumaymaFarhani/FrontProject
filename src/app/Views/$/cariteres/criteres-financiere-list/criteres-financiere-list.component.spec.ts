import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresFinanciereListComponent } from './criteres-financiere-list.component';

describe('CriteresFinanciereListComponent', () => {
  let component: CriteresFinanciereListComponent;
  let fixture: ComponentFixture<CriteresFinanciereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresFinanciereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresFinanciereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
