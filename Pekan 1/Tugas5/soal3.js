function sum(startNum, finishNum, step = 1) {
    var rangeArray = rangeWithStep(startNum, finishNum, step);
    return rangeArray.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log('================');