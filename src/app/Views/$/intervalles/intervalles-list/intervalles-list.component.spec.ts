import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallesListComponent } from './intervalles-list.component';

describe('IntervallesListComponent', () => {
  let component: IntervallesListComponent;
  let fixture: ComponentFixture<IntervallesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
