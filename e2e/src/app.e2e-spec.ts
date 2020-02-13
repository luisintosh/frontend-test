import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App SearchEngine', () => {
  let page: AppPage;
  let galleryItems;
  let firstGalleryImg;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a navbar with an image', () => {
    page.navigateTo('search');
    expect(page.getNavbar()).toBeTruthy();
  });

  it('should show a gallery with a 3x3 grid', () => {
    const searchInput = page.getSearchInput();
    searchInput.sendKeys('Crazy cat');
    searchInput.submit();
    browser.sleep(2 * 1000);
    galleryItems = page.getGalleryImages();
    firstGalleryImg = galleryItems.first().getAttribute('src');

    // check number of columns
    expect(page.getGalleryCardColumnsClass().getCssValue('column-count')).toBe('3');
    // check number of items per page
    expect(galleryItems.count()).toBe(9);
  });

  it('should use pagination and load new gallery items', () => {
    page.getPaginatorNextPageItem().click();
    browser.sleep(2 * 1000);
    expect(
      page
        .getGalleryImages()
        .first()
        .getAttribute('src')
    ).not.toBe(firstGalleryImg);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
