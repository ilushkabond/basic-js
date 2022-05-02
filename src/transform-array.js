const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const filtered = arr.filter((e, i) => arr[i + 1] !== '--discard-prev' && arr[i - 1] !== '--discard-next');
  const mapped = filtered.map((e, i) => {
    let result;
    if (e === "--double-prev" && i > 0) {
      result = arr[i - 1];
    } else if (e === "--double-next" && i < arr.length - 1) {
      result = arr[i + 1];
    } else {
      result = e;
    }

    return result;
  });

  return mapped.filter(e => !["--discard-prev", "--discard-next", "--double-prev", "--double-next"].includes(e));
}

module.exports = {
  transform
};
