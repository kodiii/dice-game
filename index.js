const message = document.getElementById("message")
const playerBetBox = document.getElementById('playerBetBox')
const inputBet = document.getElementById('inputBet')
const validateBetBtn = document.getElementById('validateBetBtn')
const totalBets = document.getElementsByClassName('totalBets')
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

const player1 = {
    player1Score: 0,
    player1Dice: document.getElementById("player1Dice"),
    palyer1MoneyBet: document.getElementById('palyer1MoneyBet'),
    player1Scoreboard: document.getElementById("player1Scoreboard"),
    palyer1total: document.getElementsByClassName('palyer1total'),
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    palyer2MoneyBet: document.getElementById('palyer2MoneyBet'),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2total: document.getElementsByClassName('player2total'),
    player2Turn: false
}
// console.log(player1.player1Dice)
let randomNumber = 0

rollBtn.addEventListener('click', function () {
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
    // console.log(player1.player1Dice)
    // console.log(player2.player2Dice)
})

let playerInputBet = parseInt(inputBet.value)

validateBetBtn.addEventListener('click', function () {
    console.log(playerInputBet)
})