
var mixin = require('merge-descriptors');
var express = require('express');
var application = require('./application');
var req = require('./request');
var res = require('./response');
var utils = require('./utils');


mixin(exports, application);

/**
 * Expose `express` and `express app`
 */
exports.express = express;

express.app = express();


/**
 * Expose `application`
 */
exports.application = application;

/**
 * Expose `request` and `response`
 */
exports.request = req;
exports.response = res;

/**
 * Expose `utils`
 */
exports.utils = utils;

