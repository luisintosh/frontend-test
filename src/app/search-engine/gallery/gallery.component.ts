import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryItem } from './interfaces/gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent {
  @Input() items: GalleryItem[];

  constructor() {}
}
