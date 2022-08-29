import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresViewOneComponent } from './criteres-view-one.component';

describe('CriteresViewOneComponent', () => {
  let component: CriteresViewOneComponent;
  let fixture: ComponentFixture<CriteresViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
