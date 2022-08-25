import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierclauseFinanViewOneComponent } from './cahierclause-finan-view-one.component';

describe('CahierclauseFinanViewOneComponent', () => {
  let component: CahierclauseFinanViewOneComponent;
  let fixture: ComponentFixture<CahierclauseFinanViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierclauseFinanViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierclauseFinanViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
