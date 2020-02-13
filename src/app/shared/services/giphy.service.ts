import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphySearchResult } from '../interfaces/giphy-search-result';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const BASE_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  params: HttpParams;

  constructor(private httpClient: HttpClient) {
    this.params = new HttpParams().set('api_key', environment.GIPHY_APIKEY);
  }

  /**
   * Request to find GIFs by entering a word or phrase
   * @param term Search query term or phrase
   * @param limit The maximum number of objects to return. (Default: 9)
   * @param offset Specifies the starting position of the results. Defaults to 0.
   */
  search(term: string, limit = 9, offset = 0): Observable<GiphySearchResult> {
    const params = this.params
      .set('q', term)
      .set('limit', `${limit}`)
      .set('offset', `${offset}`);

    return this.httpClient.get<GiphySearchResult>(`${BASE_URL}/search`, {
      params
    });
  }
}
