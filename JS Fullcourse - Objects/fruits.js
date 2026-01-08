let fruits = ["orange", "apple", "orange", "apple", "apple"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")

function renderShelf(){
    fruits.forEach(fruit => {
        if (fruit === "apple"){
            console.log("apple found")
            appleShelf.innerHTML += fruit + ", "
        } else if (fruit === "orange"){
            console.log("orange found")
            orangeShelf.innerHTML += fruit + ", "
        }
    });
}
renderShelf()