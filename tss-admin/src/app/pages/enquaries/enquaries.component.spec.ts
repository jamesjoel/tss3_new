import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquariesComponent } from './enquaries.component';

describe('EnquariesComponent', () => {
  let component: EnquariesComponent;
  let fixture: ComponentFixture<EnquariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
