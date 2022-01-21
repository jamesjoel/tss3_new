import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H10Component } from './h10.component';

describe('H10Component', () => {
  let component: H10Component;
  let fixture: ComponentFixture<H10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
