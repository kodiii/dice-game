const message = document.getElementById("message")
const playerBetBox = document.getElementById('playerBetBox')
const inputBet = document.getElementById('inputBet')
const validateBetBtn = document.getElementById('validateBetBtn')
const totalBets = document.querySelector('.totalBets')
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

const player1 = {
    player1Score: 0,
    player1Dice: document.getElementById("player1Dice"),
    palyer1MoneyBet: document.getElementById('palyer1MoneyBet'),
    player1Scoreboard: document.getElementById("player1Scoreboard"),
    player1Total: document.querySelector('.player1total'),
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    palyer2MoneyBet: document.getElementById('palyer2MoneyBet'),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2Total: document.querySelector('.player2total'),
    player2Turn: false
}

// add bets from players
function addBet() {
    let player1Bet = 0
    let player2Bet = 0

    validateBetBtn.addEventListener('click', function () {
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
            validateBetBtn.disabled = true
        }
        player1.player1Turn = !player1.player1Turn
        totalBets.textContent = player1Bet + player2Bet
        playGame()
    })
}
addBet()

let randomNumber = 0

function playGame() {
    rollBtn.addEventListener('click', function () {
        // inputBet.disabled = true
        randomNumber = Math.floor(Math.random() * 22) + 1

        if (player1.player1Turn) {
            player1.player1Dice.textContent = randomNumber
            player2.player2Dice.classList.remove('active')
            player1.player1Dice.classList.add('active')
            message.textContent = `Player 1 turned ${randomNumber}`
        } else {
            player2.player2Dice.textContent = randomNumber
            player1.player1Dice.classList.remove('active')
            player2.player2Dice.classList.add('active')
            message.textContent = `Player 2 turned ${randomNumber}`
        }
        player1.player1Turn = !player1.player1Turn
    })
}

function gameCases() {
    switch (randomNumber) {
        
    }
}
