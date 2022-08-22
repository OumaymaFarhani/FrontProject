import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecahierchargesAjoutComponent } from './typecahiercharges-ajout.component';

describe('TypecahierchargesAjoutComponent', () => {
  let component: TypecahierchargesAjoutComponent;
  let fixture: ComponentFixture<TypecahierchargesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecahierchargesAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecahierchargesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
