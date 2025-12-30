let firstCard = 2;
let secondCard = 6;
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
// let messageEl = document.getElementById("message-el");
function hit(){
    card = document.getElementById("cards-el");
    card.innerText = Math.floor(Math.random() * (12 - 1) + 1);

    sum = parseInt(document.getElementById("count-el").innerText) + parseInt(card.innerText);
    if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You've got a Bust!";
        isAlive = false;
    } else {
        message = `You got ${sum}, want to hit again?`;
        isAlive = true;
    }
    // Coloca o valor na soma
    document.querySelector("#count-el").textContent = sum;
    document.getElementById("message-el").innerText = message;      

    // Logica pra mostrar tela de vitoria.
}

function DealerTurn(){    
    dealerHand = 0
    while (dealerHand < 21) {
        sleep
        
    }
    sum = firstCard + secondCard;
    document.getElementById("cards-el").innerText = sum;
    document.getElementById("hit-btn").style.display = "none";
    document.getElementById("stay-btn").style.display = "none";
    
}
