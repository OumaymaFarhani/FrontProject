import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierclauseAjoutComponent } from './cahierclause-ajout.component';

describe('CahierclauseAjoutComponent', () => {
  let component: CahierclauseAjoutComponent;
  let fixture: ComponentFixture<CahierclauseAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierclauseAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierclauseAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
