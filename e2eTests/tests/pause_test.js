/* global Feature Scenario pause */

Feature('Search test');

Scenario('Use search', I => {
  I.amOnPage('https://codecept.io/');
  I.see('CodeceptJS');
  I.seeElement('#search_input_react');
  pause();
});
