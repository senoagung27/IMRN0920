class Hewan {
    constructor(nama){
        this.name=nama
        this.legs=4
        this.cold_blooded=false
    }
    get nameM(){
        return this.name
    }
    set nameM(data){
        this.name = data
    }

    get legsM(){
        return this.legs
    }
    set legsM(data){
        this.legs = data
    }

    get cold_bloodedM(){
        return this.cold_blooded
    }
    set cold_bloodedM(data){
        this.cold_blooded = data
    }
}

var sheep = new Hewan("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Hewan{
    constructor (nama){
        super (nama)
        this.legs = 2
    }
    yell(){
        console.log('Auooo')
    }
}

class Frog extends Hewan{
    constructor (nama){
        super (nama)
    }
    jump(){
        console.log('hop hop')
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log()

