import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatiopnComponent } from './reservatiopn.component';

describe('ReservatiopnComponent', () => {
  let component: ReservatiopnComponent;
  let fixture: ComponentFixture<ReservatiopnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservatiopnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservatiopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
