/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-bootstrap-4',

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

  options: {
    nodeAssets: {
      'popper.js': {
        srcDir: 'dist/umd',
        import: {
          include: [
            'popper.js',
            'popper-utils.js',
            'popper.js.map',
            'popper-utils.js.map'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      },
      bootstrap: {
        srcDir: 'dist/js',
        import: {
          include: [
            'bootstrap.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  }
};
