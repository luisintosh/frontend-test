import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string): Promise<unknown> {
    return browser.get(url) as Promise<unknown>;
  }

  getNavbar() {
    return element(by.css('nav .navbar .navbar-brand img'));
  }

  getSearchInput() {
    return element(by.css('form input[name="search"]'));
  }

  getGalleryImages() {
    return element.all(by.css('.gallery-container .card-columns .card img'));
  }

  getGalleryCardColumnsClass() {
    return element(by.css('.gallery-container .card-columns'));
  }

  getPaginatorNextPageItem() {
    return element(by.css('ngb-pagination > ul > li:last-child > a.page-link'));
  }
}
