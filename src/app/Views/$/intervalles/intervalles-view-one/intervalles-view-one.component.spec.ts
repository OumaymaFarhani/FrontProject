import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallesViewOneComponent } from './intervalles-view-one.component';

describe('IntervallesViewOneComponent', () => {
  let component: IntervallesViewOneComponent;
  let fixture: ComponentFixture<IntervallesViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallesViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallesViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
