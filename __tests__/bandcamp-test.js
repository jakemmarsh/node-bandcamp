'use strict';

var bandcamp = require('node-bandcamp');
var isStream = require('isstream');

jest.dontMock('../lib/bandcamp.js');

describe('Bandcamp', function() {

  it('should return an array of search results given a query', function(done) {
    bandcamp.trackSearch('tibetan pop stars', 5).then(function(results) {
      expect(results.constructor === Array).toBeTruthy();
      done();
    }).catch(function(err) {
      expect(err).toBeUndefined();
      done();
    });
  });

  it('should have correctly structured search results', function(done) {
    bandcamp.trackSearch('tibetan pop stars', 5).then(function(results) {
      var firstResult = results[0] || {};

      expect(firstResult.title).toBeDefined();
      expect(firstResult.album).toBeDefined();
      expect(firstResult.artist).toBeDefined();
      expect(firstResult.image).toBeDefined();
      expect(firstResult.url).toBeDefined();

      done();
    }).catch(function(err) {
      expect(err).toBeUndefined();
      done();
    });
  });

  it('should return an audio stream given a track URL', function(done) {
    bandcamp.getTrack('http://hopalong.bandcamp.com/track/tibetan-pop-stars').then(function(stream) {
      expect(isStream(stream)).toBeTruthy();
      done();
    }).catch(function(err) {
      expect(err).toBeUndefined();
      done();
    });
  });

});