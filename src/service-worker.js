'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);
self.toolbox.router.any('/*', self.toolbox.cacheFirst);
self.toolbox.router.default = self.toolbox.networkFirst;