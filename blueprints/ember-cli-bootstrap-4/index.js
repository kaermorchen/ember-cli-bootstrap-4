/* eslint-env node */
'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    let importStatement = '\n@import "ember-cli-bootstrap-4/bootstrap";\n';
    let stylePath = path.join('app', 'styles');
    let file = path.join(stylePath, `app.scss`);

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(file)) {
      this.ui.writeLine(`Added import statement to ${file}`);
      this.insertIntoFile(file, importStatement, {});
    } else {
      fs.writeFileSync(file, importStatement);
      this.ui.writeLine(`Created ${file}`);
    }

    return this.addPackagesToProject([
      { name: 'bootstrap', target: '4.0.0' },
      { name: 'popper.js', target: '^1.12.9' },
      { name: 'ember-cli-sass', target: '^7.0.0' }
    ]);
  }
};
