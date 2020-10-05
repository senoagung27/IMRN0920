function arrayToObject(arr){
    var now = new Date();
    var thisYear = now.getFullYear();

    for(var data = 0; data < arr.length; data++){
        console.log(data+1, ".", arr[data][0], arr[data][1], ":");
        if(isNaN(thisYear-arr[data][3])){
            var umur = "Invalid Birth Year";
        }
        else{
            var umur = thisYear-arr[data][3];
        }
        var biodata = {
            firstName: arr[data][0],
            lastName: arr[data][1],
            gender: arr[data][2],
            age: umur
        }
        console.log(biodata);
    }
}