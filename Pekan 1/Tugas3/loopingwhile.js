console.log("Nomor 2");
console.log();

for(var i = 1; i <= 20; i++){
    if(i % 2 == 1){
        if(i % 3 == 0){
            console.log(String(i), " - I Love Coding");
        }

        else{
            console.log(String(i), " - Santai");
        }
    }

    else if(i % 2 == 0){
        console.log(String(i), " - Berkualitas");
    }
}

console.log();




