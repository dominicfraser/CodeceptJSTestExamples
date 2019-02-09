/* global actor */
const { addDays, format } = require('date-fns');

const getJourneyDate = (daysAfterToday = 7) => {
  if (daysAfterToday < 0) throw new Error('Journey date must be in the future');
  const futureDate = addDays(new Date(), daysAfterToday);
  return format(futureDate, 'YYMMDD');
};

const encodeGetParams = paramObj =>
  Object.entries(paramObj)
    .map(kv => kv.map(encodeURIComponent).join('='))
    .join('&');

module.exports = () =>
  actor({
    goToFlightSearch({
      origin = 'edi',
      dest = 'lhr',
      outDate = getJourneyDate(),
      inDate = getJourneyDate(8),
      adults = 1,
      queryParams = {},
    } = {}) {
      const fullQueryParams = { adults, ...queryParams };

      const url = `https://www.skyscanner.net/transport/flights/${origin}/${dest}/${outDate}/${inDate}?${encodeGetParams(fullQueryParams)}`;

      this.amOnPage(url);
    },
  });
