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

  createRowWithBlock() {
    let row = this.createRow();
    row[this.fallingBlock.x] = this.fallingBlock.block;
    return row;
  }

  drop(block) {
    this.createFallingBlock(block);
    this.board[0] = this.createRowWithBlock();
  }

  toString() {
    return this.board.map((row) => row.join("")).join("\n") + "\n";
  }
}
