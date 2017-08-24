/* global $ */
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { visit, find, currentURL } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | index');

test('visiting /index', async function(assert) {
  await visit('/');

  assert.equal(currentURL(), '/');

  assert.equal($(find('.navbar.bg-dark')).css('backgroundColor'), 'rgb(52, 58, 64)');
});
