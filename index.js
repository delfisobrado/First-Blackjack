 
let cards= [];
let sum = 0; 
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl =document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player= {
    name: 'Delfi',
    chips: 145
}
let playerEl =document.getElementById('player-el');
playerEl.textContent = player.name + ' :$' + player.chips

function getRandomCard () {
 let randomNumber= Math.floor(Math.random()*13)+ 1;
 if (randomNumber === 1) {
    return 11;

 } else if (randomNumber > 10) {
    return 10
 } else {
    return randomNumber
 }
}

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards =[firstCard, secondCard];
    sum += firstCard + secondCard;
    renderGame();
}


function renderGame() {
    if (sum <= 20)   {
message= 'Do you want to draw a new card? ';
} else if (sum === 21) {
    message = 'You have Blackjack';
    hasBlackJack= true;
} else {
    message= 'You are out of the game ';
    isAlive= false;
}
sumEl.textContent = 'Sum: ' + sum 
messageEl.textContent = message
cardsEl.textContent = 'Cards: ';
for (let index = 0; index < cards.length; index++) {
    
    cardsEl.textContent += cards[index] + ' ';
}
  
}

function newCard () {
    if (isAlive ===true && hasBlackJack === false) {
           let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame()
    } 
 
}



