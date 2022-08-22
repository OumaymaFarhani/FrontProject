import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargestypeEditComponent } from './cahierchargestype-edit.component';

describe('CahierchargestypeEditComponent', () => {
  let component: CahierchargestypeEditComponent;
  let fixture: ComponentFixture<CahierchargestypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargestypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargestypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
