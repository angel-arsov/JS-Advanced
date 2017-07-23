function aggregates(numArr) {
    console.log(`Sum = ${reduce(numArr, (a, b) => Number(a) + Number(b))}`);
    console.log(`Min = ${reduce(numArr, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reduce(numArr, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reduce(numArr, (a, b) => Number(a) * Number(b))}`);
    console.log(`Join = ${reduce(numArr, (a, b) => '' + a + b)}`);

    function reduce(arr, func) {
        let result = arr[0];
        for(let next of arr.slice(1)) {
            result = func(result, next);
        }
        return result;
    }
}



aggregates([5, -3, 20, 7, 0.5]);