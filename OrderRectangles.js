function orderRectangles(inputArr) {
    let rects = [];
    for(let [width, height] of inputArr) {
        let rect = createRectangle(width, height);
        rects.push(rect);
    }
    rects.sort((a,b) => a.compareTo(b));
    console.log(rects);

    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function(other) {
                let result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);
            }
        };
        return rectangle;
    }
}

orderRectangles([[10, 5], [3, 20], [5, 12]]);