import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaperatorComponent } from './saperator.component';

describe('SaperatorComponent', () => {
  let component: SaperatorComponent;
  let fixture: ComponentFixture<SaperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
