import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierclauseEditComponent } from './cahierclause-edit.component';

describe('CahierclauseEditComponent', () => {
  let component: CahierclauseEditComponent;
  let fixture: ComponentFixture<CahierclauseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierclauseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierclauseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
