import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecahierchargesListComponent } from './typecahiercharges-list.component';

describe('TypecahierchargesListComponent', () => {
  let component: TypecahierchargesListComponent;
  let fixture: ComponentFixture<TypecahierchargesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecahierchargesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecahierchargesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
