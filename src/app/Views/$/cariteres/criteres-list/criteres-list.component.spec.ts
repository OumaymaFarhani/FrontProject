import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresListComponent } from './criteres-list.component';

describe('CriteresListComponent', () => {
  let component: CriteresListComponent;
  let fixture: ComponentFixture<CriteresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
