import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecahierchargesViewOneComponent } from './typecahiercharges-view-one.component';

describe('TypecahierchargesViewOneComponent', () => {
  let component: TypecahierchargesViewOneComponent;
  let fixture: ComponentFixture<TypecahierchargesViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecahierchargesViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecahierchargesViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
