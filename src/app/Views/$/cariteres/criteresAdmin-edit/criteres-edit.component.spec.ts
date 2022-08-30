import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresAdminEditComponent } from './criteresAdmin-edit.component';

describe('CriteresEditComponent', () => {
  let component: CriteresAdminEditComponent;
  let fixture: ComponentFixture<CriteresAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
