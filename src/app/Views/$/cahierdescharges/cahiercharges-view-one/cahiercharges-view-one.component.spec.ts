import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargesViewOneComponent } from './cahiercharges-view-one.component';

describe('CahierchargesViewOneComponent', () => {
  let component: CahierchargesViewOneComponent;
  let fixture: ComponentFixture<CahierchargesViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargesViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargesViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
