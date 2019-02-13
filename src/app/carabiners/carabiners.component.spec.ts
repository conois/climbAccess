import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarabinersComponent } from './carabiners.component';

describe('CarabinersComponent', () => {
  let component: CarabinersComponent;
  let fixture: ComponentFixture<CarabinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarabinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarabinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
