import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervallestypeEditComponent } from './intervallestype-edit.component';

describe('IntervallestypeEditComponent', () => {
  let component: IntervallestypeEditComponent;
  let fixture: ComponentFixture<IntervallestypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervallestypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallestypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
