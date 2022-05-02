const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const symbols = [];
  let result = 0;

  str.split('').forEach((e, i) => {
    result++;

    if (str[i] !== str[i + 1]) {
      symbols.push([result, str[i]]);
      result = 0;
    }

  })

  return symbols.flat().join('').replace(/[1]/g, '');
}

module.exports = {
  encodeLine
};
