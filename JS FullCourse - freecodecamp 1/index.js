

// document = o documento atual(html)
// document.getElementById("count-el").innerText = 6

function save(){
    let count = document.getElementById("count-el").innerText
    let save_number = document.getElementById("save-el")

    // starts without dash    
    save_number.innerText === "" ? save_number.innerText = count : save_number.innerText += " - " + count
    console.log(count)    
}

// criar uma função e settando ela no botão usando o onClick="clickCounter()"
function clickCounter(){
    let count = document.getElementById("count-el").innerText
    count = parseInt(count)

    const countEl = document.getElementById("count-el")
    function increment() {
        count += 1
        countEl.innerText=count
    }
    increment()  
    // document.getElementById("count-el").addEventListener("click", increment)
}
// Colocar diretamente um Listener no botão esperando um clique e fazendo o increment
document.getElementById("increment-btn").addEventListener("click", function(){
    let count = document.getElementById("count-el").innerText
    count = parseInt(count)

    const countEl = document.getElementById("count-el")
    function increment() {
        count += 1
        countEl.innerText=count
    }
    increment()
})

let myAge = 25
let humanDogRatio = 7
myDogAge = myAge * humanDogRatio
console.log(myDogAge)

let texto1 = "Hello World"
let texto2 = "Bye World"

let concatenado = texto1 + texto2
