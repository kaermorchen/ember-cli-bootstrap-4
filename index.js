/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

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
        vendor: {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist/umd',
          import: [
            'popper.js',
            'popper.js.map',
            'popper-utils.js',
            'popper-utils.js.map'
          ],
          included: function(parent) {
            console.log(parent);
            this._super.included.apply(this, arguments);
          }
        }
      },
      bootstrap: {
        enabled: !process.env.EMBER_CLI_FASTBOOT,
        srcDir: 'dist/js',
        import: [
          'bootstrap.js'
        ]
      }
    }
  }
};
