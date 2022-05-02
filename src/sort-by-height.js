const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  return arr.reduce((a, c, i) => {
    return c === -1
      ? a.splice(i, 0, c).concat(a)
      : a
  }, arr.filter(e => e > 0).sort((a, b) => a - b));
}

module.exports = {
  sortByHeight
};
