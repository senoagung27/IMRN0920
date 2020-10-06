console.log("Nomor 2");
console.log();

const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(firstName + " " + lastName)
        return 
      }
    }
}
   
newFunction("William", "Imoh").fullName() 

console.log();