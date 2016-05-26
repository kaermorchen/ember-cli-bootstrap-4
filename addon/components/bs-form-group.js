import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['errors:has-danger'],

  value: null,
  label: null,
  errors: null,
  helpBlock: null,

  disabled: false
});