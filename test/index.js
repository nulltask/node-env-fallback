
/**
 * Module dependencies.
 */

var assert = require('assert');

describe('node-env-fallback', function() {
  it('should returns development when no NODE_ENV', function() {
    require.cache = {};
    assert('development', require('../'));
  });
  it('should returns NODE_ENV', function() {
    process.env.NODE_ENV = 'production';
    require.cache = {};
    assert('production', require('../'));
  });
});
