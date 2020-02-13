import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GiphyService } from './giphy.service';

const GIPHYAPI_URL =
  'https://api.giphy.com/v1/gifs/search?api_key=8MCeByGx71P2QYa65UwtJ8fxi10anm48&q=Crazy%20cat&limit=9&offset=0';
describe('GiphyService', () => {
  let service: GiphyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GiphyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<GiphySearchResult>', () => {
    const testData = {
      meta: { status: 200 },
      data: []
    };

    service.search('Crazy cat').subscribe(giphySearchResult => {
      expect(giphySearchResult.meta.status).toBe(200);
      expect(Array.isArray(giphySearchResult.data)).toBeTrue();
    });

    const req = httpTestingController.expectOne(GIPHYAPI_URL);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });
});
