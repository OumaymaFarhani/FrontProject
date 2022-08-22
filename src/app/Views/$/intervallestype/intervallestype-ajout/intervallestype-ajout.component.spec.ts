import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallestypeAjoutComponent } from './intervallestype-ajout.component';

describe('IntervallestypeAjoutComponent', () => {
  let component: IntervallestypeAjoutComponent;
  let fixture: ComponentFixture<IntervallestypeAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallestypeAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallestypeAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
