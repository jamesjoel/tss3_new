import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompshopComponent } from './compshop.component';

describe('CompshopComponent', () => {
  let component: CompshopComponent;
  let fixture: ComponentFixture<CompshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
