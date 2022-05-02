const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const columns = matrix.length;
  const rows = matrix[0].length;
  const combinations = [
    [-1, -1], [-1, 0],
    [-1, 1], [0, -1],
    [0, 1], [1, -1],
    [1, 0], [1, 1],
  ];

  const result = [...Array(columns)].map(e => Array(rows).fill(0));

  result.map((w, h) => {
    w.map((_, i) => {
      combinations.forEach(([x, y]) => {
        return result[h][i] += !!(matrix[h + y] && matrix[h + y][i + x]);
      })
    })
  });

  return result;
}

module.exports = {
  minesweeper
};
