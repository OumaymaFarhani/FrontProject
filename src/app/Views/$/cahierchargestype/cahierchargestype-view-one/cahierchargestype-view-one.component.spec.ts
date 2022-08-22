import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargestypeViewOneComponent } from './cahierchargestype-view-one.component';

describe('CahierchargestypeViewOneComponent', () => {
  let component: CahierchargestypeViewOneComponent;
  let fixture: ComponentFixture<CahierchargestypeViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargestypeViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargestypeViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
