const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const splitBtnBox = document.getElementsByClassName('split-btn-box')[0]
const yesSplitBtn = document.getElementById('yes-split-btn')
const noSplitBtn = document.getElementById('no-split-btn')

const player1 = {
    player1Score: 0,
    player1Dice: document.getElementById("player1Dice"),
    player1Scoreboard: document.getElementById("player1Scoreboard"),
    player1SplitedDice: document.getElementById('player1SplitedDice'),
    player1Turn: true
}

const player2 = {
    player2Score: 0,
    player2Dice: document.getElementById("player2Dice"),
    player2Scoreboard: document.getElementById("player2Scoreboard"),
    player2SplitedDice: document.getElementById('player2SplitedDice'),
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
        double()
    } else {
        player2.player2Dice.textContent = randomNumber
        player1.player1Dice.classList.remove('active')
        player2.player2Dice.classList.add('active')
        message.textContent = `Player 2 turned ${randomNumber}`
        double()
    }
    player1.player1Turn = !player1.player1Turn
    // console.log(player1.player1Dice)
    // console.log(player2.player2Dice)
})

function double() {
    let splitrandomNr = Math.floor(randomNumber / 2)

    if (randomNumber >= 15 && randomNumber < 21) {
        splitBtnBox.style.display = 'block'

        if (player1.player1Turn) {

            yesSplitBtn.addEventListener('click', function () {
                console.log('splited')
                player1.player1Dice.textContent = Math.floor(randomNumber / 2)
                player1.player1SplitedDice.style.display = 'block'
                player1.player1SplitedDice.classList.add('active')
                player1.player1SplitedDice.textContent = player1.player1Dice.textContent
            })

            noSplitBtn.addEventListener('click', function () {
                message.textContent = 'Player 2 its your turn'
            })

        } else if (player2.player2Turn) {

            yesSplitBtn.addEventListener('click', function () {
                console.log('splited')
                player2.player2Dice.textContent = Math.floor(randomNumber / 2)
                player2.player2SplitedDice.style.display = 'block'
                player2.player2SplitedDice.classList.add('active')
                player2.player2SplitedDice.textContent = player2.player2Dice.textContent
            })

            noSplitBtn.addEventListener('click', function () {
                message.textContent = 'Player 1 its your turn'
            })

        }

        noSplitBtn.addEventListener('click', function () {
            console.log('roll dice')
        })
    } else if (randomNumber === 21) {
        console.log('You Win')
    } else if (randomNumber > 21) {
        console.log('You loose')
    }
}
