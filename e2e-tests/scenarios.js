'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /linksPage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/linksPage");
  });


  describe('links', function() {

    beforeEach(function() {
      browser.get('index.html#!/linksPage');
    });


    it('should render linksPage when user navigates to /linksPage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('homePage', function() {

    beforeEach(function() {
      browser.get('index.html#!/homePage');
    });


    it('should render homePage when user navigates to /homePage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
