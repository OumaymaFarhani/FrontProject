import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCriteresComponent } from './list-criteres.component';

describe('ListCriteresComponent', () => {
  let component: ListCriteresComponent;
  let fixture: ComponentFixture<ListCriteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCriteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
