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

  tick() {
    if (this.fallingBlock) {
      // empty the current row
      this.board[this.fallingBlock.y] = this.createRow();
      // move the block position down one row
      this.fallingBlock.y++;
      // update the next row with the block
      this.board[this.fallingBlock.y] = this.createRowWithBlock();
    }
  }
  toString() {
    return this.board.map((row) => row.join("")).join("\n") + "\n";
  }
}
