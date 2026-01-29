export class RotatingShape {
    shape = [];

    constructor(shape) {
        const rows = shape.replace(/\s+/g, "\n").split("\n");
        this.shape = rows.map(row => row.split(""));
    }

    static fromString(shape) {
        return new RotatingShape(shape);
    }

    toString() {
        return this.shape.map(row => row.join("")).join("\n") + "\n";
    }

}