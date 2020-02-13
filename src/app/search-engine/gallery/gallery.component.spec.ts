import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GalleryItem } from './interfaces/gallery-item';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.items = galleryItems;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an image grid of 9 elements', () => {
    const gallery = de.queryAll(By.css('.card-columns .card img'));
    expect(gallery.length).toBe(9);
  });
});

const galleryItems: GalleryItem[] = Array(9).fill({ url: 'https://via.placeholder.com/200' });
