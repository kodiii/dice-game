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
    player1Total: document.querySelector('.player1total'),
    player1Money: 100,
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2Total: document.querySelector('.player2total'),
    player2Money: 100,
    player2Turn: false
}

//  add bets from players
function addBet() {
    rollBtn.disabled = true
    player1.player1Total.textContent = player1.player1Money
    player2.player2Total.textContent = player2.player2Money
    player1.player1Dice.classList.remove('active')
    player2.player2Dice.classList.remove('active')

    addBetBtn.addEventListener('click', function () {
        if (player1.player1Turn) {
            player1Bet = parseInt(inputBet.value)
            console.log('player 1 bet ' + '= ' + parseInt(inputBet.value))
            player1.player1Money -= player1Bet
            player1.player1Total.textContent = player1.player1Money
            inputBet.value = ''
            message.textContent = 'Player 2 place your bet!'
        } else {
            player2Bet = parseInt(inputBet.value)
            console.log('player 2 bet ' + '= ' + parseInt(inputBet.value))
            player2.player2Money -= player2Bet
            player2.player2Total.textContent = player2.player2Money
            inputBet.value = ''
            inputBet.disabled = true
            addBetBtn.disabled = true
            rollBtn.disabled = false
            message.textContent = 'Player 1 place your bet!'
            message.textContent = 'Roll the DICE'
        }

        player1.player1Turn = !player1.player1Turn
        allBets = player1Bet + player2Bet
        totalBets.textContent = parseInt(allBets)

        console.log('totalBets ' + '= ' + totalBets.textContent)
    })
}
addBet()

// event listener to get a random dice number and the total score
// of each player 
function playGame() {
    rollBtn.addEventListener('click', function () {
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

// game cases winning or loosing possibilities
function gameCases() {
    if (player1Score === 21) {
        message.textContent = 'Player 1 you WIN'
        player1.player1Total.textContent = player1.player1Money + allBets
        resetGame()
    } else if (player2Score === 21) {
        message.textContent = 'Player 2 you WIN'
        player2.player2Total.textContent = player2.player2Money + allBets
        resetGame()
    } else if (player1Score > 21) {
        message.textContent = 'Sorry Player 1 you LOOSE'
        player2.player2Total.textContent = player2.player2Money + allBets
        resetGame()
    } else if (player2Score > 21) {
        message.textContent = 'Sorry Player 2 you LOOSE'
        player1.player1Total.textContent = player1.player1Money + allBets
        resetGame()
    }
}

// game reset function to initialize the values
function resetGame() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'

    resetBtn.addEventListener('click', function () {
        allBets = 0
        totalBets.textContent = '-'
        player1Score = 0
        player2Score = 0
        player1Bet = 0
        player2Bet = 0
        player1.player1Scoreboard.textContent = player1Bet
        player2.player2Scoreboard.textContent = player2Bet
        player1.player1Dice.textContent = '-'
        player2.player2Dice.textContent = '-'
        inputBet.disabled = false
        addBetBtn.disabled = false
        rollBtn.style.display = 'block'
        rollBtn.disabled = true
        resetBtn.style.display = 'none'
        player1.player1Turn = true
        message.textContent = 'Player 1 place your bet!'
        // randomPlayer()

        console.log('allbets ' + '= ' + allBets)
        console.log('totalBets ' + '= ' + totalBets.textContent)
        console.log('player 1 bet ' + '= ' + player1Bet)
        console.log('player 2 bet ' + '= ' + player2Bet)
        console.log('player 1 scoreboard ' + '= ' + player1.player1Scoreboard.textContent)
        console.log('player 2 scoreboard ' + '= ' + player2.player2Scoreboard.textContent)
        console.log('inputBet ' + '= ' + inputBet.value)
        console.log('player1Total ' + '= ' + player1.player1Total.textContent)
        console.log('player2Total ' + '= ' + player2.player2Total.textContent)
        console.log('-------------------------------------------')
    })
}

// random player starting function 
// function randomPlayer() {
//     let sortRndPlayer = Math.floor(Math.random() * 2) + 1
//     console.log(sortRndPlayer)
//     rollBtn.disabled = true

//     if (sortRndPlayer === 1) {
//         message.textContent = 'Player 1 its your turn.'
//         player1.player1Turn = true
//     } else {
//         message.textContent = 'Player 2 its your turn.'
//         player2.player2Turn = true
//     }
//     player2.player2Turn = !player2.player2Turn
//     allBets = player1Bet + player2Bet
//     totalBets.textContent = allBets
// }

