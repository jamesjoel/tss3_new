import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepratorComponent } from './seprator.component';

describe('SepratorComponent', () => {
  let component: SepratorComponent;
  let fixture: ComponentFixture<SepratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
