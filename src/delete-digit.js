const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = n.toString();

  return Math.max(
    ...strN.split('')
      .map((e, i) => strN.slice(0, i) + strN.slice(i + 1))
  )
}

module.exports = {
  deleteDigit
};
