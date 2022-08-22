import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallesAjoutComponent } from './intervalles-ajout.component';

describe('IntervallesAjoutComponent', () => {
  let component: IntervallesAjoutComponent;
  let fixture: ComponentFixture<IntervallesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallesAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
