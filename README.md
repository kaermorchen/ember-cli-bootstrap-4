<h1 align="center">Ember CLI Bootstrap 4</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ember-cli-bootstrap-4"><img src="https://img.shields.io/npm/v/ember-cli-bootstrap-4.svg?style=flat-square&colorB=44cc11" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-cli-bootstrap-4"><img src="https://img.shields.io/npm/dm/ember-cli-bootstrap-4.svg?style=flat-square" alt="npm monthly downloads"></a>  
  <a href="https://travis-ci.org/kaermorchen/ember-cli-bootstrap-4"><img src="https://img.shields.io/travis/kaermorchen/ember-cli-bootstrap-4.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://emberobserver.com/addons/ember-cli-bootstrap-4"><img src="https://emberobserver.com/badges/ember-cli-bootstrap-4.svg" alt="Ember Observer Score"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT"></a>
</p>

An [ember-cli](http://www.ember-cli.com) addon for using [Bootstrap 4](http://getbootstrap.com/) in Ember applications.

### [Demo](https://kaermorchen.github.io/ember-cli-bootstrap-4/)

## Getting Started

Install in ember-cli application

```bash
ember install ember-cli-bootstrap-4
```

Then include the following in your `app.scss` file:

```scss
@import "ember-cli-bootstrap-4/bootstrap";
```

or for grid only

```scss
@import "ember-cli-bootstrap-4/bootstrap-grid";
```

## Configuration

### JavaScript Components
This addon don't have any Ember.js components.

Javascript files of Bootstrap are adding from `bootstrap/dist/js/bootstrap.js`.

For import not all Bootstrap 4 js modules, you can specify its in `ember-cli-build`:

```js
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-bootstrap-4': {
      js: ['util', 'alert', 'tooltip']
    }
  });

  ...
};
```

Or you can turn its off:
```js
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-bootstrap-4': {
      js: null
    }
  });

  ...
};
```

### Custom variables

You can use custom Bootstrap 4 variables. Store your custom [available](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss) variables in `app\styles\_custom.scss`. And add import `_custom.scss` in `app.scss`.

```scss
@import "custom";
@import "ember-cli-bootstrap-4/bootstrap";
```

### Custom Bootstrap 4 components

For import custom Bootstrap 4 css components instead `@import "ember-cli-bootstrap-4/bootstrap";` you can use code below:

```scss
@import "ember-cli-bootstrap-4/functions";
@import "ember-cli-bootstrap-4/variables";
@import "ember-cli-bootstrap-4/mixins";
@import "ember-cli-bootstrap-4/print";
@import "ember-cli-bootstrap-4/reboot";
@import "ember-cli-bootstrap-4/type";
@import "ember-cli-bootstrap-4/images";
@import "ember-cli-bootstrap-4/code";
@import "ember-cli-bootstrap-4/grid";
@import "ember-cli-bootstrap-4/tables";
@import "ember-cli-bootstrap-4/forms";
@import "ember-cli-bootstrap-4/buttons";
@import "ember-cli-bootstrap-4/transitions";
@import "ember-cli-bootstrap-4/dropdown";
@import "ember-cli-bootstrap-4/button-group";
@import "ember-cli-bootstrap-4/input-group";
@import "ember-cli-bootstrap-4/custom-forms";
@import "ember-cli-bootstrap-4/nav";
@import "ember-cli-bootstrap-4/navbar";
@import "ember-cli-bootstrap-4/card";
@import "ember-cli-bootstrap-4/breadcrumb";
@import "ember-cli-bootstrap-4/pagination";
@import "ember-cli-bootstrap-4/badge";
@import "ember-cli-bootstrap-4/jumbotron";
@import "ember-cli-bootstrap-4/alert";
@import "ember-cli-bootstrap-4/progress";
@import "ember-cli-bootstrap-4/media";
@import "ember-cli-bootstrap-4/list-group";
@import "ember-cli-bootstrap-4/close";
@import "ember-cli-bootstrap-4/modal";
@import "ember-cli-bootstrap-4/tooltip";
@import "ember-cli-bootstrap-4/popover";
@import "ember-cli-bootstrap-4/carousel";
@import "ember-cli-bootstrap-4/utilities";
```

## License
Ember-cli-bootstrap-4 is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
