node-bandcamp
=============

node.js Bandcamp API. This package can be found on NPM [here](https://www.npmjs.org/package/node-bandcamp).

---

### Getting Started

1. `npm install --save node-bandcamp`
2. `var bandcamp = require('node-bandcamp')`

---

#### Searching for tracks

Specific tracks can be searched for using the `trackSearch` method. This function takes the following parameters:

- `query` (str): The search query for which you want results.
- `limit` (defaults to 20): The maximum number of results you want returned. Defaults to `20`.

The function will recursively query Bandcamp until results are exhausted or the limit is hit.

```
var bandcamp = require('node-bandcamp');

bandcamp.trackSearch('tibetan pop stars', 30).then(function(results){
  // do something with search results
}).catch(function(err) {
  // handle error
});

Returns a `promise`, which will eventually resolve as an array of search results. Results are in the format:

```
[
  {
    title: 'title',
    album: 'album name',
    artist: 'artist name',
    image: 'URL to track artwork',
    url: 'URL to be passed to trackSearch method'
  }
  ...
]

```

---

#### Streaming a track

A specific track can be streamed using the `getTrack` method. This function takes just one parameter, the Bandcamp URL string retrieved using the previously discussed `trackSearch` method.

```
var bandcamp = require('node-bandcamp');

bandcamp.getTrack('http://hopalong.bandcamp.com/track/tibetan-pop-stars').then(function(stream) {
  // pipe audio stream to res, etc.
}).catch(function(err) {
  // handle error
});
```

Returns a `promise`, which will eventually resolve as an audio stream.