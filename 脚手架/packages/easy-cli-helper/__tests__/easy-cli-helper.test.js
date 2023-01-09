'use strict';

const easyCliHelper = require('..');
const assert = require('assert').strict;

assert.strictEqual(easyCliHelper(), 'Hello from easyCliHelper');
console.info("easyCliHelper tests passed");
