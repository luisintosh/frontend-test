import { Component, OnDestroy } from '@angular/core';
import { GiphyService } from '../shared/services/giphy.service';
import { GiphySearchResult } from '../shared/interfaces/giphy-search-result';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GalleryItem } from './gallery/interfaces/gallery-item';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.sass']
})
export class SearchEngineComponent implements OnDestroy {
  searchQuery: string;

  galleryItems: GalleryItem[] = [];
  galleryItemsPerPage = 9;

  resultsPage = 1;

  loading = false;
  errorMessage: string;

  giphySearchResult: GiphySearchResult;
  giphyServiceSub: Subscription;

  constructor(private giphyService: GiphyService) {}

  ngOnDestroy(): void {
    if (this.giphyServiceSub) {
      this.giphyServiceSub.unsubscribe();
    }
  }

  /**
   * Perform a search request calculating limit and offset
   * @param term string
   * @param page number
   */
  search(term: string, page: number) {
    this.loading = true;
    this.errorMessage = undefined;

    const limit = this.galleryItemsPerPage;
    const offset = (page - 1) * limit;

    this.giphyServiceSub = this.giphyService
      .search(term, limit, offset)
      .pipe(
        tap(_ => (this.loading = false)),
        catchError(this.handleError<any>('HTTPRequest'))
      )
      .subscribe(result => {
        this.giphySearchResult = result;
        this.getGalleryItems();
      });
  }

  onSubmitSearch(value: string) {
    this.searchQuery = value;
    this.search(this.searchQuery, this.resultsPage);
  }

  /**
   * Generate a <GalleryItem> array from <GiphySearchResult> data
   */
  getGalleryItems() {
    this.galleryItems = this.giphySearchResult.data.map(item => ({ url: item.images.preview_gif.url }));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      this.errorMessage = `Oops! We have had problems loading your results.`;
      return of(result as T);
    };
  }
}
