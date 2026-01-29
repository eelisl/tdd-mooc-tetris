export class RotatingShape {
    shape = [];

    constructor(shape) {
        const rows = shape.replace(/\s+/g, "\n").split("\n");
        this.shape = rows.map(row => row.split(""));
    }

    static fromString(shape) {
        return new RotatingShape(shape);
    }

    copy() {
        const copy = new RotatingShape("");
        copy.shape = this.shape.map(row => [...row]);
        return copy;
    }

    rotateRight() {
        const rotatedShape = this.shape.map((row, index) => {
            return row.map((_, i) => {
                return this.shape[this.shape.length - 1 - i][index];
            });
        })
        this.shape = rotatedShape;
        return this;
    }

    rotateLeft() {
        const rotatedShape = this.shape.map((row, index) => {
            return row.map((_, i) => {
                return this.shape[i][index];
            });
        })
        this.shape = rotatedShape;
        return this;
    }

    toString() {
        return this.shape.map(row => row.join("")).join("\n") + "\n";
    }

}