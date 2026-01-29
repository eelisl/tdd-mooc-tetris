export class Board {
  width;
  height;
  board = [];

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(height).fill(this.createRow());
  }

  createRow() {
    return Array(this.width).fill(".");
  }

  toString() {
    return this.board.map((row) => row.join("")).join("\n") + "\n";
  }
}
