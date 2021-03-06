import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { SearchEngineComponent } from './search-engine.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [SearchEngineComponent, SearchBarComponent, GalleryComponent],
  imports: [CommonModule, SearchEngineRoutingModule, FormsModule, NgbPaginationModule]
})
export class SearchEngineModule {}
