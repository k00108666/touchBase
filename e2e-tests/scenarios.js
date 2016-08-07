'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /landingPage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/landingPage");
  });


  describe('landingPage', function() {

    beforeEach(function() {
      browser.get('index.html#!/landingPage');
    });


    it('should render landingPage when user navigates to /landingPage', function() {
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
