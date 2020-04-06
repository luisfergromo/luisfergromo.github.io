import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLandingComponent } from './angular-landing.component';

describe('AngularLandingComponent', () => {
  let component: AngularLandingComponent;
  let fixture: ComponentFixture<AngularLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
