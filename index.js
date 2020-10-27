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
    player1Turn: 0
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2TotalBox: document.querySelector('.player2TotalBox'),
    player2Total: document.querySelector('.player2total'),
    player2Turn: 0
}

let player1Money = 100
let player2Money = 100
player1.player1Total.textContent = player1Money
player2.player2Total.textContent = player2Money

//  add bets from players
function addBet() {
    rollBtn.disabled = true
    player1.player1Dice.classList.remove('active')
    player2.player2Dice.classList.remove('active')

    let sortRndPlayer = Math.floor(Math.random() * 2) + 1
    console.log(sortRndPlayer)

    if (sortRndPlayer === 1) {
        message.textContent = 'Player 1 its your turn. Insert your BET'
        player1.player1Turn = true
        player1AddBet()
    } else {
        message.textContent = 'Player 2 its your turn. Insert your BET'
        player2.player2Turn = true
        player2AddBet()
    }

    // addBetBtn.addEventListener('click', function () {
    //     if (player1.player1Turn) {

    //     } else if (player2.player2Turn) {

    //     }
    //     player1.player1Turn = !player1.player1Turn

    //     message.textContent = 'Roll the DICE'
    //     inputBet.disabled = true
    //     addBetBtn.disabled = true
    //     rollBtn.disabled = false
    //     allBets = player1Bet + player2Bet
    //     totalBets.textContent = parseInt(allBets)

    //     console.log(typeof (totalBets.textContent = parseInt(allBets)))
    // })
}
addBet()

function player1AddBet() {
    addBetBtn.addEventListener('click', function () {
        player1Bet = parseInt(inputBet.value)
        console.log(parseInt(inputBet.value))
        player1Money -= player1Bet
        player1.player1Total.textContent = player1Money
        inputBet.value = ''
        message.textContent = 'Player 2 its your turn'
    })
}

function player2AddBet() {
    addBetBtn.addEventListener('click', function () {
        player2Bet = parseInt(inputBet.value)
        console.log(parseInt(inputBet.value))
        player2Money -= player2Bet
        player2.player2Total.textContent = player2Money
        inputBet.value = ''
        message.textContent = 'Player 1 its your turn'
    })
}


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

        console.log(player1Bet)
        console.log(player2Bet)
        console.log(player1.player1Scoreboard.textContent)
        console.log(player2.player2Scoreboard.textContent)
        console.log(inputBet.value)
    })
}

// function randomPlayer() {
//     let sortRndPlayer = Math.floor(Math.random() * 2) + 1
//     console.log(sortRndPlayer)
//     rollBtn.disabled = true

//     if (sortRndPlayer === 1) {
//         message.textContent = 'Player 1 its your turn.'

//     } else if (sortRndPlayer === 2) {
//         message.textContent = 'Player 2 its your turn.'

//         })
//     }
//     allBets = player1Bet + player2Bet
//     totalBets.textContent = allBets
// }
// randomPlayer()