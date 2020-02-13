import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { SearchEngineComponent } from './search-engine.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [SearchEngineComponent, SearchBarComponent],
  imports: [CommonModule, SearchEngineRoutingModule, FormsModule]
})
export class SearchEngineModule {}
