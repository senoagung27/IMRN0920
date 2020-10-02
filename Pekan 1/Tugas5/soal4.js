function sum(startNum, finishNum=0, step=1){
    var jumlah = 0;
    if(startNum < finishNum){
        while(startNum <= finishNum){
            jumlah += startNum;
            startNum += step;
        }
        return jumlah
    }
    else if(startNum > finishNum){
        while(finishNum <= startNum){
            jumlah += startNum;
            startNum -= step;
        }
        return jumlah
    }
    else{
        return -1;
    }
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 