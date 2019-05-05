'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const fastbootTransform = require('fastboot-transform');
const resolve = require('resolve');
const defaultOptions = {
  js: ['util', 'alert', 'button', 'carousel', 'collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'scrollspy', 'tab', 'toast']
};

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    let vendorPath = `vendor/${this.name}`;
    let options = Object.assign({}, defaultOptions, app.options[this.name]);

    if (Array.isArray(options.js)) {
      let host = this._findHost();

      host.import({
        development: path.join(vendorPath, 'popper.js'),
        production: path.join(vendorPath, 'popper.min.js'),
      });

      host.import({
        development: path.join(vendorPath, 'popper-utils.js'),
        production: path.join(vendorPath, 'popper-utils.min.js'),
      });

      options.js.forEach(function (file) {
        host.import(path.join(vendorPath, `${file}.js`));
      });
    }
  },

  treeForVendor() {
    let popperPath = path.join(this.resolvePackagePath('popper.js'), 'dist', 'umd');
    let popperJs = fastbootTransform(new Funnel(popperPath, {
      files: ['popper.js', 'popper.min.js', 'popper-utils.js', 'popper-utils.min.js'],
      destDir: this.name
    }));

    let bootstrapPath = path.join(this.resolvePackagePath('bootstrap'), 'js', 'dist');
    let bootstrapJs = fastbootTransform(new Funnel(bootstrapPath, {
      files: defaultOptions.js.map(item => `${item}.js`),
      destDir: this.name
    }));

    return mergeTrees([popperJs, bootstrapJs]);
  },

  treeForStyles(tree) {
    let styleTrees = [];
    let host = this._findHost();

    if (host.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel(path.join(this.resolvePackagePath('bootstrap'), 'scss'), {
        destDir: this.name
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: host.project.root }));
  },

  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  }
};
