let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard

let messageEl = document.getElementById("gameSubtitle")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Player",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13 + 1); // Generates a random number between 1 and 13
    if (randomNumber > 10) {
        return 10; // Face cards (Jack, Queen, King) are worth 10 points
    } else if (randomNumber === 1) {
        return 11; // Ace is worth 11 points
    } else {
        return randomNumber; // Numbers 2-10 are worth their face value
    }
}

function startGame() {
    isAlive = true; // Reset the game state
    let firstCard = getRandomCard(); // Get a new first card
    let secondCard = getRandomCard(); // Get a new second card
    cards = [firstCard, secondCard]; // Reset the cards array
    sum = firstCard + secondCard; // Reset the sum
    hasBlackJack = false; // Reset the blackjack state
    message = ""; // Reset the message
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"; // Reset the content
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum < 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard(); // Get a new random card
        sum += card;
        cards.push(card); // Add the new card to the cards array
        renderGame(); // Re-render the game
    }
}