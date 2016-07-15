
var annex = require('../aiport-dev/dev.js').annex;
var package = require('../aiport-package/package.js');

var piles = annex( 
    __dirname + "/piles.jade",
    query => Promise.resolve({ piles: package.installed().pile }) );

module.exports = piles;
