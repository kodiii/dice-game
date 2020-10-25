const message = document.getElementById("message")
const playerBetBox = document.getElementById('playerBetBox')
const inputBet = document.getElementById('inputBet')
const addBetBtn = document.getElementById('addBetBtn')
const totalBets = document.querySelector('.totalBets')
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
let player1Bet = 0
let player2Bet = 0
let player1Score = 0
let player2Score = 0

const player1 = {
    player1Dice: document.getElementById("player1Dice"),
    palyer1MoneyBet: document.getElementById('palyer1MoneyBet'),
    player1Scoreboard: document.getElementById("player1Scoreboard"),
    player1TotalBox: document.querySelector('.player1TotalBox'),
    player1Total: document.querySelector('.player1total'),
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    palyer2MoneyBet: document.getElementById('palyer2MoneyBet'),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2TotalBox: document.querySelector('.player2TotalBox'),
    player2Total: document.querySelector('.player2total'),
    player2Turn: false
}

// add bets from players

function addBet() {
    addBetBtn.addEventListener('click', function () {
        if (player1.player1Turn) {
            player1Bet = parseInt(inputBet.value)
            player1.player1Total.textContent -= player1Bet
            inputBet.value = ''
            message.textContent = 'Player 2 insert your BET.'
        } else {
            player2Bet = parseInt(inputBet.value)
            player2.player2Total.textContent -= player2Bet
            inputBet.value = ''
            message.textContent = 'Player 1 insert your BET.'
            message.textContent = 'Roll the DICE'
            inputBet.disabled = true
            addBetBtn.disabled = true
        }
        player1.player1Turn = !player1.player1Turn
        totalBets.textContent = player1Bet + player2Bet
    })
}
addBet()

// function validateBet() {
//     console.log('RUN')
//     if (player1Bet > player1.player1Total.textContent) {
//         console.log('Sorry no funds available, try again.')
//         message.textContent = 'Sorry no funds available, try again.'
//         player1.player1TotalBox.style.border = '5px solid var(--color-5)'
//         inputBet.value = ''
//         player1Bet = 0
//     }

//     if (player2Bet > player2.player2Total.textContent) {
//         message.textContent = 'Sorry no funds available.'
//         inputBet.value = ''
//         player2.player2TotalBox.style.border = '5px solid var(--color-5)'
//     }
// }


let randomNumber = 0

function playGame() {
    rollBtn.addEventListener('click', function () {
        // inputBet.disabled = true
        randomNumber = Math.floor(Math.random() * 22) + 1

        if (player1.player1Turn) {
            player1Score += randomNumber
            player1.player1Scoreboard.textContent += player1Score
            player1.player1Dice.textContent = randomNumber
            player2.player2Dice.classList.remove('active')
            player1.player1Dice.classList.add('active')
            message.textContent = `Player 1 turned ${randomNumber}`
        } else {
            player2Score += randomNumber
            player2.player2Scoreboard.textContent += player2Score
            player2.player2Dice.textContent = randomNumber
            player1.player1Dice.classList.remove('active')
            player2.player2Dice.classList.add('active')
            message.textContent = `Player 2 turned ${randomNumber}`
        }
        player1.player1Turn = !player1.player1Turn
    })
}
playGame()

function gameCases() {
    switch (randomNumber) {
        case 1:
            randomNumber > 21
            message.textContent = 'You LOST!'
            break;
        case 2:
            randomNumber === 21
            message.textContent = 'You WIN!'
            break;

    }
}
