import {Matrix, matrix} from "mathjs";

class GameOfLife {
  public grid: Matrix;

  constructor(m: any) {
    this.grid = matrix(m);
  }

  getCell(row: number, col: number) {
    if (row < 0 || row >= this.grid.size()[0] || col < 0 || col >= this.grid.size()[1]) {
      return 0;
    }
    return this.grid.get([row, col])
  }

  getLiveNeighbors(row: number, col: number) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        count += this.getCell(row + i, col + j);
      }
    }
    return count;
  }

  updateCell(row: number, col: number) {
    const liveNeighbors = this.getLiveNeighbors(row, col);
    const cell = this.getCell(row, col);

    if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
      return 0;
    } else if (cell === 0 && liveNeighbors === 3) {
      return 1;
    } else {
      return cell;
    }
  }

  once() {
    for (let row = 0; row < this.grid.size()[0]; row++) {
      for (let col = 0; col < this.grid.size()[1]; col++) {
        this.grid.set([row, col], this.updateCell(row, col))
      }
    }
    return this.grid;
  }

  loop(iterations: number) {
    for (let i = 0; i < iterations; i++) {
      this.once();
    }
    return this.grid;
  }
}

export default GameOfLife;

// 示例用法
// const grid = [
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
// ];
//
// const game = new GameOfLife(grid);
// game.loop(5);