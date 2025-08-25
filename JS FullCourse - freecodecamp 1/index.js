// document = o documento atual(html)
// document.getElementById("count-el").innerText = 6

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

let myAge = 25
let humanDogRatio = 7
myDogAge = myAge * humanDogRatio
console.log(myDogAge)