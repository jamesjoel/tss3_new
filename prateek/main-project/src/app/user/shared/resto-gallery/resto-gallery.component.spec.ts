import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoGalleryComponent } from './resto-gallery.component';

describe('RestoGalleryComponent', () => {
  let component: RestoGalleryComponent;
  let fixture: ComponentFixture<RestoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
