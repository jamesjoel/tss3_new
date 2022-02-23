import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoSignupComponent } from './resto-signup.component';

describe('RestoSignupComponent', () => {
  let component: RestoSignupComponent;
  let fixture: ComponentFixture<RestoSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
