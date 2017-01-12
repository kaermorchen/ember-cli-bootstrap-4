module.exports = {
  normalizeEntityName: function () { },

  beforeInstall: function () {
    return this.addBowerPackageToProject('bootstrap', '~v4.0.0-alpha.6');
  },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'ember-cli-sass', target: '^5.3.1' }
    ]);
  }
};
