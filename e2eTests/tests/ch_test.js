/* global Feature Before Scenario */

Feature('Custom Helpers test');

Before(I => {
  I.resizeWindow(1366, 768);
});

Scenario('Navigate to BBC iPlayer', I => {
  I.amOnPage('https://www.bbc.co.uk/');
  I.click('iPlayer');
  I.waitForPageLoad();
  I.see('TV Guide');
  I.seeInCurrentUrl('/iplayer');
});
