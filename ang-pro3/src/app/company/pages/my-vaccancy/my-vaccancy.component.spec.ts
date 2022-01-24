import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVaccancyComponent } from './my-vaccancy.component';

describe('MyVaccancyComponent', () => {
  let component: MyVaccancyComponent;
  let fixture: ComponentFixture<MyVaccancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVaccancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVaccancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
