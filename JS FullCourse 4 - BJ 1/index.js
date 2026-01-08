let firstCard;
let secondCard;
let iAlive = false;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let message="";
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let cards;

let playerEl = document.querySelector("#player-el");
let player = {
    name: "Rafa",
    chips: 145,
    sayHello: function(){
        console.log("Olá!");
    }
}
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();    
    cards = [firstCard, secondCard];
    sum = cards.reduce((a, b) => a + b);
    renderGame();
}

function renderGame(){    
    if (sum === 21){
        message="You've got blackjack!";        
        hasBlackJack = true;        
    } else if (sum < 21){
        message="You've got " + sum + ", want to hit again?";                
    } else{
        message="You've got a Bust!";
        isAlive = false;        
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards.join(", ");
}

function newCard(){
    if (!hasBlackJack && isAlive){
        let card = getRandomCard();
        cards.push(card);    
        sum += card;
        renderGame();
        console.log("hit");
    }    
}

function getRandomCard(){
    let card = Math.floor( Math.random()*13 ) + 1;
    if (card === 1){
        return 11;
    } else if (card > 10){
        return 10;
    } else{
        return card;
    }
}

document.querySelector('#start-game-btn').addEventListener('click', startGame);
document.querySelector('#new-card-btn').addEventListener('click', newCard); 