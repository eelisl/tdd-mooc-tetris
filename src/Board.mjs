export class Board {
  width;
  height;
  board = [];
  empty = ".";
  fallingBlock = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(height).fill(this.createRow());
  }

  createFallingBlock(block) {
    if (this.fallingBlock) {
      throw new Error("already falling");
    }
    this.fallingBlock = {
      x: Math.floor(this.width / 2),
      y: 0,
      block,
    };
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }

  isAtBottom() {
    return this.fallingBlock.y === this.height - 1;
  }

  createRow() {
    return Array(this.width).fill(this.empty);
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

  checkCollision() {
    return this.isAtBottom() ||
      this.board[this.fallingBlock.y + 1][this.fallingBlock.x] !== this.empty;
  }

  tick() {
    if (this.fallingBlock) {
      if (this.checkCollision()) {
        this.fallingBlock = null;
        return;
      }
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
