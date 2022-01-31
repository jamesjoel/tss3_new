import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChefComponent } from './master-chef.component';

describe('MasterChefComponent', () => {
  let component: MasterChefComponent;
  let fixture: ComponentFixture<MasterChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
