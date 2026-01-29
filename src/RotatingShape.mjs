export class RotatingShape {
    initialShape = [];
    shape = [];

    constructor(shape) {
        const rows = shape.replace(/\s+/g, "\n").split("\n");
        this.shape = rows.map(row => row.split(""));
        this.initialShape = this.shape
    }

    static fromString(shape) {
        return new RotatingShape(shape);
    }

    rotateRight() {
        const rotatedShape = this.initialShape.map((row, index) => {
            return row.map((_, i) => {
                return this.shape[this.shape.length - 1 - i][index];
            });
        })
        this.shape = rotatedShape;
        return this;
    }

    toString() {
        return this.shape.map(row => row.join("")).join("\n") + "\n";
    }

}