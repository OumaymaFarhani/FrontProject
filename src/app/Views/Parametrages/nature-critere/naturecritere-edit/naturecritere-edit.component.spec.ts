import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturecritereEditComponent } from './naturecritere-edit.component';

describe('NaturecritereEditComponent', () => {
  let component: NaturecritereEditComponent;
  let fixture: ComponentFixture<NaturecritereEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturecritereEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturecritereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
