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

## Configuration

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
@import "ember-cli-bootstrap-4/animation";
@import "ember-cli-bootstrap-4/dropdown";
@import "ember-cli-bootstrap-4/button-group";
@import "ember-cli-bootstrap-4/input-group";
@import "ember-cli-bootstrap-4/custom-forms";
@import "ember-cli-bootstrap-4/nav";
@import "ember-cli-bootstrap-4/navbar";
@import "ember-cli-bootstrap-4/card";
@import "ember-cli-bootstrap-4/breadcrumb";
@import "ember-cli-bootstrap-4/pagination";
@import "ember-cli-bootstrap-4/pager";
@import "ember-cli-bootstrap-4/labels";
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
@import "ember-cli-bootstrap-4/utilities-background";
@import "ember-cli-bootstrap-4/utilities-spacing";
@import "ember-cli-bootstrap-4/utilities-responsive";
```

### Custom variables

You can use custom Bootstrap 4 variables. For this copy `bower_components\bootstrap\scss\_variables.scss` in your `app\styles` directory. And add import `variables.scss` in `app.scss`.

```
@import "variables";
@import "ember-cli-bootstrap-4/bootstrap";
```

### JavaScript Components
[WIP]

## License
Ember-cli-bootstrap-4 is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
