import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresEditComponent } from './criteres-edit.component';

describe('CriteresEditComponent', () => {
  let component: CriteresEditComponent;
  let fixture: ComponentFixture<CriteresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
