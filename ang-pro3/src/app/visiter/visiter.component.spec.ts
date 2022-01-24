import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiterComponent } from './visiter.component';

describe('VisiterComponent', () => {
  let component: VisiterComponent;
  let fixture: ComponentFixture<VisiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
