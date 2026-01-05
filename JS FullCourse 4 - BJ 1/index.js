let firstCard = 1;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let iAlive = true;
let message="";
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let cards = [firstCard, secondCard];

function startGame(){
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

function hit(){
    let card = 6
    cards.push(card);
    
    sum += card;
    renderGame();
    console.log("hit");
}

document.querySelector('#start-game-btn').addEventListener('click', startGame);
document.querySelector('#new-card-btn').addEventListener('click', hit); 