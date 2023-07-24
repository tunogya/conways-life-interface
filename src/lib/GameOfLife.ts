class GameOfLife {
  public grid: number[][];
  public rows: number;
  public cols: number;
  constructor(grid: number[][]) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  // get cell status
  getCell(row: number, col: number) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return 0; // 超出边界的细胞状态为死亡
    }
    return this.grid[row][col];
  }

  // get live neighbors
  getLiveNeighbors(row: number, col: number) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // 忽略当前细胞
        count += this.getCell(row + i, col + j);
      }
    }
    return count;
  }

  // update cell status based on live neighbors count.
  // cell status: 0: dead, 1: live, 2: dead in next generation.
  // live neighbors: 0: dead, 1: live, 2: dead in next generation.
  // return: 0: dead, 1: live, 2: dead in next generation.
  updateCell(row: number, col: number) {
    const liveNeighbors = this.getLiveNeighbors(row, col);
    const cell = this.getCell(row, col);

    if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
      return 0; // 活细胞周围活细胞少于2个或多于3个，细胞死亡
    } else if (cell === 0 && liveNeighbors === 3) {
      return 1; // 死细胞周围活细胞恰好为3个，细胞复活
    } else {
      return cell; // 细胞状态不变
    }
  }

  // update grid
  updateGrid() {
    const newGrid = [];
    for (let row = 0; row < this.rows; row++) {
      const newRow = [];
      for (let col = 0; col < this.cols; col++) {
        newRow.push(this.updateCell(row, col));
      }
      newGrid.push(newRow);
    }
    this.grid = newGrid;
  }

  // run iterations
  run(iterations: number) {
    for (let i = 0; i < iterations; i++) {
      this.updateGrid();
    }
  }
}

export default GameOfLife;

// 示例用法
// const grid = [
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [1, 1, 1, 0],
//   [0, 0, 0, 0]
// ];
//
// const game = new GameOfLife(grid);
// game.run(5);
// console.log(game.grid);