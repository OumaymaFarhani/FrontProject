import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCritereviewOneComponent } from './nature-critereview-one.component';

describe('NatureCritereviewOneComponent', () => {
  let component: NatureCritereviewOneComponent;
  let fixture: ComponentFixture<NatureCritereviewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureCritereviewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureCritereviewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
