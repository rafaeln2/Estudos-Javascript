let person = {
    name: "Rafa",
    age: 30,
    country: "Brazil",
    logData: function(){
        console.log(this.name + " is " + this.age + " years old and lives in " + this.country)
    }
}

person.logData()


let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}

console.log("\n")
for (const country of largeCountries) {
    console.log(country);
}
console.log("\n")

largeCountries.forEach((country, index) => {
    console.log(index,country);
})
console.log("\n")

let countriesModified = largeCountries.map(n => n + " modificado")
console.log(countriesModified)
console.log("\n")

let countriesSpecific = largeCountries.filter(n => n.length > 5 )
console.log(countriesSpecific)
console.log("\n")


const soma = [2,4,6].reduce((acc, current) => {
    return acc+current;
})

console.log(soma)

largeCountries = ["tannu tuva", "brazil", "venezuela", "estonia", "usa"]
console.log(largeCountries)
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("PAKISTAN")
console.log(largeCountries)

let hands = ["rock", "paper", "scissors"]
function play(){
    console.log(Math.floor(Math.random()*3))
}