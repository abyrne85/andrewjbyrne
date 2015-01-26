'use strict';

describe('Service: Highchartoptions', function () {

  // load the service's module
  beforeEach(module('andrewjbyrneApp'));

  // instantiate service
  var Highchartoptions;
  beforeEach(inject(function (_Highchartoptions_) {
    Highchartoptions = _Highchartoptions_;
  }));

  it('should do something', function () {
    expect(!!Highchartoptions).toBe(true);
  });

});
