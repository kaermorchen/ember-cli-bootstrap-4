import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { visit, currentURL } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | index');

test('visiting /index', async function(assert) {
  await visit('/');

  assert.equal(currentURL(), '/');
});
