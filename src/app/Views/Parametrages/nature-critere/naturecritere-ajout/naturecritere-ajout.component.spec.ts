import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturecritereAjoutComponent } from './naturecritere-ajout.component';

describe('NaturecritereAjoutComponent', () => {
  let component: NaturecritereAjoutComponent;
  let fixture: ComponentFixture<NaturecritereAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturecritereAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturecritereAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
