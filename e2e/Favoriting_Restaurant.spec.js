const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('You have no favorite restaurants', '.empty-message');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see('You have no favorite restaurants', '.empty-message');

  I.amOnPage('/');
  I.seeElement('.explore-container');
  I.waitForElement('#cards', 5);
  I.seeElement('#cards');
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.seeElement({ shadow: ['restaurant-item'] });
  I.seeElement({ shadow: ['h3.card-item__title a'] });
  const firstRestaurant = locate({ shadow: ['h3.card-item__title a'] }).first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.waitForElement('#loveButton', 5);
  I.seeElement('#loveButton');
  I.click('#loveButton');
  I.see('Restaurant has been added', sweetAlert);

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-container');
  I.waitForElement('#cards', 5);
  I.seeElement('#cards');
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.seeElement({ shadow: ['restaurant-item'] });
  I.seeElement({ shadow: ['h3.card-item__title a'] });
  const favoritedRestaurantTitle = await I.grabTextFrom({ shadow: ['h3.card-item__title'] });

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});
