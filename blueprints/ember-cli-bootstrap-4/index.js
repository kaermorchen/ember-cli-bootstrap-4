module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'bootstrap', target: '^v4.0.0-alpha.6' }
    ]);
  }
};
