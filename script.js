let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let player = {
    name: "Zill",
    chips: 150

}

let playerEl = document.getElementById("credit")
playerEl.textContent = player.name + ":  $" + player.chips 

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    
    if(randomNumber > 10)
    {
        return 10
    }

    else if (randomNumber === 11)
    {
        return 1
    }

    else {
        return randomNumber
    }
}


function startGame()
{
    isAlive = true

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard , secondCard]
    let sum = firstCard + secondCard;
    renderGame();
     
}

function renderGame()
{

    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;

    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum < 21)
    {
        message = "Do you want to draw a new card?"
    }

    else if(sum === 21)
    {
        message = "Wohoo! You've got Black Jack!"
        hasBlackJack = true;
    }

    else{
        message = "You're out of the game"
        isAlive = false;
    }

    messageEl.textContent = message;
}


function newCard()
{

    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum = sum + card;
    cards.push(card);
    renderGame();
    }
}
