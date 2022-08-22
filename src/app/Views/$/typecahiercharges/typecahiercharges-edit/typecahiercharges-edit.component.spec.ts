import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecahierchargesEditComponent } from './typecahiercharges-edit.component';

describe('TypecahierchargesEditComponent', () => {
  let component: TypecahierchargesEditComponent;
  let fixture: ComponentFixture<TypecahierchargesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecahierchargesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecahierchargesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
