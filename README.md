# Ember CLI Bootstrap 4

An [ember-cli](http://www.ember-cli.com) addon for using [Bootstrap 4](http://getbootstrap.com/) in Ember applications.

## Getting Started

Install in ember-cli application

```
ember install ember-cli-bootstrap-4
```

Then include the following in your `app.scss` file:

```
@import "ember-cli-bootstrap-4/bootstrap";
```

or for flex support

```
@import "ember-cli-bootstrap-4/bootstrap-flex";
```

or for grid only

```
@import "ember-cli-bootstrap-4/bootstrap-grid";
```

## Configuration

### Custom variables

You can use custom Bootstrap 4 variables. For this copy `bower_components\bootstrap\scss\_variables.scss` in your `app\styles` directory as `_custom.scss`. And add import `_custom.scss` in `app.scss`.

```
@import "custom";
@import "ember-cli-bootstrap-4/bootstrap";
```

### Custom Bootstrap 4 components

For import custom Bootstrap 4 css components instead `@import "ember-cli-bootstrap-4/bootstrap";` you can use code below:

```
// Core variables and mixins
@import "ember-cli-bootstrap-4/variables";
@import "ember-cli-bootstrap-4/mixins";

// Reset and dependencies
@import "ember-cli-bootstrap-4/normalize";
@import "ember-cli-bootstrap-4/print";

// Core CSS
@import "ember-cli-bootstrap-4/reboot";
@import "ember-cli-bootstrap-4/type";
@import "ember-cli-bootstrap-4/images";
@import "ember-cli-bootstrap-4/code";
@import "ember-cli-bootstrap-4/grid";
@import "ember-cli-bootstrap-4/tables";
@import "ember-cli-bootstrap-4/forms";
@import "ember-cli-bootstrap-4/buttons";

// Components
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
@import "ember-cli-bootstrap-4/responsive-embed";
@import "ember-cli-bootstrap-4/close";

// Components w/ JavaScript
@import "ember-cli-bootstrap-4/modal";
@import "ember-cli-bootstrap-4/tooltip";
@import "ember-cli-bootstrap-4/popover";
@import "ember-cli-bootstrap-4/carousel";

// Utility classes
@import "ember-cli-bootstrap-4/utilities";
```

### JavaScript Components
This addon don't have any javascript components.

Javascript files of Bootstrap are adding from `bootstrap/dist/js/bootstrap.js`

## License
Ember-cli-bootstrap-4 is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
