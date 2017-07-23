class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(firstPoint, secondPoint) {
        return Math.sqrt(((firstPoint.x - secondPoint.x) * (firstPoint.x - secondPoint.x))
            + ((firstPoint.y - secondPoint.y)) * (firstPoint.y - secondPoint.y));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
