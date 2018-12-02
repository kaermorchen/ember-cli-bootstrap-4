import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    const navbar = find('.navbar.bg-dark');

    assert.equal(window.getComputedStyle(navbar, null).getPropertyValue('background-color'), 'rgb(52, 58, 64)');
  });
});
