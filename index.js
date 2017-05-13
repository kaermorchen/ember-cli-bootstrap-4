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
      tether: {
        enabled: !process.env.EMBER_CLI_FASTBOOT,
        srcDir: 'dist/js',
        import: [
          'tether.js'
        ]
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
