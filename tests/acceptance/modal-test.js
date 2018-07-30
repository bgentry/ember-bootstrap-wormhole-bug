import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | modal', function(hooks) {
  setupApplicationTest(hooks);

  test('opening a modal', async function(assert) {
    let done = assert.async();
    await visit('/');

    assert.equal(currentURL(), '/');
    await click(".dropdown-toggle");
    await click(".open-modal-button");
    assert.ok(find(".modal-footer button.btn"), "it shows the modal");

    done();
  });
});
