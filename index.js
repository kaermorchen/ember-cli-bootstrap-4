/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

const defaultOptions = {
  js: ['util', 'alert', 'button', 'carousel', 'collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'scrollspy', 'tab']
};

module.exports = {
  name: 'ember-cli-bootstrap-4',

  included: function (app) {
    this._super.included(app);

    var popperPath = path.join('node_modules', 'popper.js', 'dist', 'umd');
    var jsPath = path.join('node_modules', 'bootstrap', 'js', 'dist');
    var options = Object.assign({}, defaultOptions, this.app.options[this.name]);

    if (Array.isArray(options.js)) {
      var include = options.js.map(item => item + '.js');

      app.import({
        development: path.join(popperPath, 'popper.js'),
        production:  path.join(popperPath, 'popper.min.js'),
      });

      app.import({
        development: path.join(popperPath, 'popper-utils.js'),
        production:  path.join(popperPath, 'popper-utils.min.js'),
      });

      include.forEach(function(file) {
        app.import(path.join(jsPath, file));
      });
    }
  },

  treeForStyles: function treeForStyles(tree) {
    const styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel('node_modules/bootstrap/scss', {
        destDir: 'ember-cli-bootstrap-4'
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },
};
