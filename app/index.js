'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	method1: function () {
		console.log('method1 just ran');
	},
	method2: function () {
		console.log('method2 just ran');
	},

	constructor: function () {

		generators.Base.apply(this, arguments);

	}

});

