/**
 * this loads the newrelic-browser snippet
 */

const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/assets/scripts/newrelic-browser.js');
const newrelic = fs.readFileSync(file, 'utf-8');

module.exports = newrelic;
