Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing already one favorited restaurant', async ({ I }) => {
  I.seeElement('.explore-container');
  I.waitForElement('#cards', 5);
  I.seeElement('#cards');
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.seeElement({ shadow: ['restaurant-item'] });
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.seeElement('.explore-container');
  I.waitForElement('#cards', 5);
  I.seeElement('#cards');
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.seeElement({ shadow: ['restaurant-item'] });
  I.seeElement({ shadow: ['h3.card-item__title a'] });
  I.click({ shadow: ['h3.card-item__title a'] });
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.seeElement({ shadow: ['restaurant-detail'] });
  I.waitForElement('#loveButton', 5);
  I.seeElement('#loveButton');
  I.click('#loveButton');
  I.see('Restaurant has been removed', sweetAlert);

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-container');
  I.waitForElement('#cards', 5);
  I.seeElement('#cards');
  I.waitForElement('#loader', 5);
  I.dontSeeElement('#loader');
  I.see('You have no favorite restaurants', '.empty-message');
});
