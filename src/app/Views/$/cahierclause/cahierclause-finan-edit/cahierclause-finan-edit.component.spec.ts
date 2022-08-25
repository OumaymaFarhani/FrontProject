import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierclauseFinanEditComponent } from './cahierclause-finan-edit.component';

describe('CahierclauseFinanEditComponent', () => {
  let component: CahierclauseFinanEditComponent;
  let fixture: ComponentFixture<CahierclauseFinanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierclauseFinanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierclauseFinanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
