<h1 align="center">Ember CLI Bootstrap 4</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ember-cli-bootstrap-4"><img src="https://img.shields.io/npm/v/ember-cli-bootstrap-4.svg?style=flat-square&colorB=44cc11" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-cli-bootstrap-4"><img src="https://img.shields.io/npm/dm/ember-cli-bootstrap-4.svg?style=flat-square" alt="npm monthly downloads"></a>
  <a href="https://emberobserver.com/addons/ember-cli-bootstrap-4"><img src="https://emberobserver.com/badges/ember-cli-bootstrap-4.svg" alt="Ember Observer Score"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT"></a>
</p>

An [ember-cli](http://www.ember-cli.com) addon for using [Bootstrap 4](http://getbootstrap.com/) in Ember applications.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

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

### JavaScript
Ember don't support jQuery and this addon don't include the javascript part of Bootstrap too.

If you need to use `bootstrap.js` in your project, install `jQuery` and `popper.js` and include its like [others dependencies](https://guides.emberjs.com/release/addons-and-dependencies/).

```bash
npm install jquery popper.js
```

```js
// ember-cli-build.js

app.import('node_modules/jquery/dist/jquery.js');
app.import('node_modules/popper.js/dist/umd/popper.js');
app.import('node_modules/popper.js/dist/umd/popper-utils.js');
app.import('node_modules/bootstrap/dist/js/bootstrap.js');
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
@import "ember-cli-bootstrap-4/root";
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
@import "ember-cli-bootstrap-4/toasts";
@import "ember-cli-bootstrap-4/modal";
@import "ember-cli-bootstrap-4/tooltip";
@import "ember-cli-bootstrap-4/popover";
@import "ember-cli-bootstrap-4/carousel";
@import "ember-cli-bootstrap-4/spinners";
@import "ember-cli-bootstrap-4/utilities";
@import "ember-cli-bootstrap-4/print";
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

Ember-cli-bootstrap-4 is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
