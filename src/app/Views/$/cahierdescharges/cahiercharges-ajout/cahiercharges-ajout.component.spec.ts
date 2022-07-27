import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargesAjoutComponent } from './cahiercharges-ajout.component';

describe('CahierchargesAjoutComponent', () => {
  let component: CahierchargesAjoutComponent;
  let fixture: ComponentFixture<CahierchargesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargesAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
