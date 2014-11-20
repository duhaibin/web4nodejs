
var mixin = require('merge-descriptors');
var express = require('express');
var application = require('./application');
var request = require('./request');
var response = require('./response');
var utils = require('./utils');

/**
 * Expose `express`
 */
exports = module.exports = function () {
    var app = express();
    application.setting(app);
    return app
};

exports.express = express;

/**
 * Expose `application`
 */
exports.application = application;

/**
 * Expose `application`
 */
exports.request = request;

/**
 * Expose `response`
 */
exports.response = response;

/**
 * Expose `utils`
 */
exports.utils = utils;

