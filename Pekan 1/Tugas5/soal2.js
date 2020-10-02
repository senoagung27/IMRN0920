function rangeWithStep(startNum, finishNum, step){
    var a = [0];
    if(startNum < finishNum){
        while(startNum <= finishNum){
            a.push(startNum);
            startNum += step;
        }
        a.shift();
        return a
    }
    else if(startNum > finishNum){
        while(finishNum <= startNum){
            a.push(startNum);
            startNum -= step;
        }
        a.shift();
        return a
    }
    else{
        return -1;
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]