import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallestypeListComponent } from './intervallestype-list.component';

describe('IntervallestypeListComponent', () => {
  let component: IntervallestypeListComponent;
  let fixture: ComponentFixture<IntervallestypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallestypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallestypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
