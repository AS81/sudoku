module.exports = function solveSudoku(matrix) {
  solveTheSudoku(matrix);
  return matrix;
};

function solveTheSudoku(m) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (m[i][j] == 0) {
        for (let n = 1; n < 10; n++) {
          if (testCell(m, i, j, n)) {
            m[i][j] = n;
            if (solveTheSudoku(m)) {
              return true;
            } else {
              m[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function testCell(cellSudoku, row, col, num) {
  //let rowCell = (colCell = 0);
  for (let i = 0; i < 9; i++) {
    let rowCell = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    let colCell = Math.floor(col / 3) * 3 + (i % 3);
    if (
      cellSudoku[row][i] == num ||
      cellSudoku[i][col] == num ||
      cellSudoku[rowCell][colCell] == num
    ) {
      return false;
    }
  }
  return true;
}
