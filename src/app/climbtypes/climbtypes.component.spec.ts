import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbtypesComponent } from './climbtypes.component';

describe('ClimbtypesComponent', () => {
  let component: ClimbtypesComponent;
  let fixture: ComponentFixture<ClimbtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
