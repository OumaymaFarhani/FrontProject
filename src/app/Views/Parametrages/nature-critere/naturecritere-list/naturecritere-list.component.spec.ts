import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturecritereListComponent } from './naturecritere-list.component';

describe('NaturecritereListComponent', () => {
  let component: NaturecritereListComponent;
  let fixture: ComponentFixture<NaturecritereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturecritereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturecritereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
