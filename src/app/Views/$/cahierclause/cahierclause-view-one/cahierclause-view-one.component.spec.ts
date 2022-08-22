import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierclauseViewOneComponent } from './cahierclause-view-one.component';

describe('CahierclauseViewOneComponent', () => {
  let component: CahierclauseViewOneComponent;
  let fixture: ComponentFixture<CahierclauseViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierclauseViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierclauseViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
