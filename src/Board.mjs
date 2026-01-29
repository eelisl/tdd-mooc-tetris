export class Board {
  width;
  height;
  board = [];
  fallingBlock = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(height).fill(this.createRow());
  }

  createFallingBlock(block) {
    this.fallingBlock = {
      x: Math.floor(this.width / 2),
      y: 0,
      block,
    };
  }

  createRow() {
    return Array(this.width).fill(".");
  }

  drop(block) {
    let row = this.createRow();
    row[Math.floor(this.width / 2)] = block;
    this.board[0] = row;
  }

  toString() {
    return this.board.map((row) => row.join("")).join("\n") + "\n";
  }
}
