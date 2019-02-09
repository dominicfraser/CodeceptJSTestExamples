/* global Feature Scenario */

Feature('Include I.goToFlightSearch');

Scenario('start on a flight search', I => {
  I.goToFlightSearch();
  I.saveScreenshot('flightSearchResultsLanding.png');
  I.see('Skyscanner');
  I.wait(5);
});
