import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargestypeAjoutComponent } from './cahierchargestype-ajout.component';

describe('CahierchargestypeAjoutComponent', () => {
  let component: CahierchargestypeAjoutComponent;
  let fixture: ComponentFixture<CahierchargestypeAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargestypeAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargestypeAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
