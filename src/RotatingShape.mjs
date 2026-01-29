export class RotatingShape {
    shape = [];

    constructor(shape) {
        const rows = shape.replace(/\s+/g, "\n").split("\n");
        this.shape = rows.map(row => row.split(""));
    }

}