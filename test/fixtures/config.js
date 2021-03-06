(function () {
  'use strict';

  if (host.browser) {
    // Configure Mocha
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.checkLeaks();
    mocha.globals([]);
  }

  // Set global settings for all tests
  beforeEach(function () {
    this.currentTest.timeout(2000);
    this.currentTest.slow(100);
  });

}());
