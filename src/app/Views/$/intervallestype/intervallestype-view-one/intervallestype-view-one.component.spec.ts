import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallestypeViewOneComponent } from './intervallestype-view-one.component';

describe('IntervallestypeViewOneComponent', () => {
  let component: IntervallestypeViewOneComponent;
  let fixture: ComponentFixture<IntervallestypeViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallestypeViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallestypeViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
