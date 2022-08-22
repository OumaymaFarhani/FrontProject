import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallesEditComponent } from './intervalles-edit.component';

describe('IntervallesEditComponent', () => {
  let component: IntervallesEditComponent;
  let fixture: ComponentFixture<IntervallesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
