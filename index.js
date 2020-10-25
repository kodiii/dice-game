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
let allBets = 0

const player1 = {
    player1Dice: document.getElementById("player1Dice"),
    player1Scoreboard: document.getElementById("player1Scoreboard"),
    player1TotalBox: document.querySelector('.player1TotalBox'),
    player1Total: document.querySelector('.player1total'),
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2TotalBox: document.querySelector('.player2TotalBox'),
    player2Total: document.querySelector('.player2total'),
    player2Turn: false
}

let player1Money = 100
let player2Money = 100
player1.player1Total.textContent = player1Money
player2.player2Total.textContent = player2Money

// add bets from players
function addBet() {
    rollBtn.disabled = true

    addBetBtn.addEventListener('click', function () {
        if (player1.player1Turn) {
            player1Bet = parseInt(inputBet.value)
            player1Money -= player1Bet
            player1.player1Total.textContent = player1Money
            inputBet.value = ''
            message.textContent = 'Player 2 insert your BET.'
        } else {
            player2Bet = parseInt(inputBet.value)
            player2Money -= player2Bet
            player2.player2Total.textContent = player2Money
            inputBet.value = ''
            message.textContent = 'Player 1 insert your BET.'
            message.textContent = 'Roll the DICE'
            inputBet.disabled = true
            addBetBtn.disabled = true
            rollBtn.disabled = false
        }
        player1.player1Turn = !player1.player1Turn
        allBets = player1Bet + player2Bet
        totalBets.textContent = allBets
    })
}
addBet()

function playGame() {
    rollBtn.addEventListener('click', function () {
        // inputBet.disabled = true
        const randomNumber = Math.floor(Math.random() * 22) + 1

        if (player1.player1Turn) {
            player1Score += randomNumber
            player1.player1Scoreboard.textContent = player1Score
            player1.player1Dice.textContent = randomNumber
            player2.player2Dice.classList.remove('active')
            player1.player1Dice.classList.add('active')
            message.textContent = `Player 1 turned ${randomNumber}`
        } else {
            player2Score += randomNumber
            player2.player2Scoreboard.textContent = player2Score
            player2.player2Dice.textContent = randomNumber
            player1.player1Dice.classList.remove('active')
            player2.player2Dice.classList.add('active')
            message.textContent = `Player 2 turned ${randomNumber}`
        }
        gameCases()
        player1.player1Turn = !player1.player1Turn
    })
}
playGame()

function gameCases() {
    if (player1Score === 21) {
        message.textContent = 'Player 1 you WIN'
        player1.player1Total.textContent = player1Money + allBets
        resetGame()
    } else if (player2Score === 21) {
        message.textContent = 'Player 2 you WIN'
        player2.player2Total.textContent = player2Money + allBets
        resetGame()
    } else if (player1Score > 21) {
        message.textContent = 'Sorry Player 1 you LOOSE'
        player2.player2Total.textContent = player2Money + allBets
        resetGame()
    } else if (player2Score > 21) {
        message.textContent = 'Sorry Player 2 you LOOSE'
        player1.player1Total.textContent = player1Money + allBets
        resetGame()
    }
}

function resetGame() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'

    resetBtn.addEventListener('click', function () {
        allBets = 0
        totalBets.textContent = '$'
        player1Score = 0
        player2Score = 0
        player1.player1Scoreboard.textContent = player1Score
        player2.player2Scoreboard.textContent = player2Score
        player1.player1Dice.textContent = 0
        player2.player2Dice.textContent = 0
        inputBet.disabled = false
        addBetBtn.disabled = false
        rollBtn.style.display = 'block'
        rollBtn.disabled = true
        resetBtn.style.display = 'none'

    })
}
