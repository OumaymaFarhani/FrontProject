import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargestypeListComponent } from './cahierchargestype-list.component';

describe('CahierchargestypeListComponent', () => {
  let component: CahierchargestypeListComponent;
  let fixture: ComponentFixture<CahierchargestypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargestypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargestypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
