import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahierchargesListComponent } from './cahiercharges-list.component';

describe('CahierchargesListComponent', () => {
  let component: CahierchargesListComponent;
  let fixture: ComponentFixture<CahierchargesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CahierchargesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CahierchargesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
