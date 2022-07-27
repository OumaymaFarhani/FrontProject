import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargesEditComponent } from './cahiercharges-edit.component';

describe('CahierchargesEditComponent', () => {
  let component: CahierchargesEditComponent;
  let fixture: ComponentFixture<CahierchargesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
