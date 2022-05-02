const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)) {
    throw Error("Invalid date!");
  }

  const SEASONS = ['winter', 'spring', 'summer', 'autumn'];
  const MONTH_IN_SEASON = 3;
  const SEASON_IN_YEAR = 4;

  const month = date.getMonth();
  const idx = Math.floor((month + 1) / MONTH_IN_SEASON % SEASON_IN_YEAR);

  return SEASONS[idx];
}

module.exports = {
  getSeason
};
