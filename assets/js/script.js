// Globals
var startButton = document.querySelector('.startGame')
var timeAmount = document.querySelector('.timeLeft')
var questionContainer = document.querySelector('.questionContainer')
var questionTitle = document.createElement('h1')
var listEl = document.createElement('ul')
var li1 = document.createElement('li')
var li2 = document.createElement('li')
var li3 = document.createElement('li')
var li4 = document.createElement('li')

var listStyles = [li1, li2, li3, li4]

for (let i = 0; i < listStyles.length; i++) {
    listStyles[i].setAttribute("style", "width: 33%; height:")
    
}

var initialTime = 60
var timeLeft = null

/**
 * get elements
 * - high scores
 * - time left
 * - start game button
 * - 
 */

/**
 * Functions
 * 
 * start game()
 * - start timer
 * - present question and answers
 * - if true, read Correct! else, Wrong!
 * 
 * render high scores()
 * 
 * go back()
 * - restarts game
 * 
 * clear high scores()
 * - remove high score data
 * 
 */
var questions = ['People that write code are called: ', 'Which document mostly answers for styling?', 'JavaScript is used for: ', 'HTML is an acronym for: ', 'In html, an <ol> is reffered to: ']

timeAmount.textContent = 0

function startTimer() {
    timeLeft = initialTime
    var timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timeAmount.textContent = timeLeft
        } else {
            gameOver()
        }
    }, 1000)
}

function startGame() {
    startTimer()
    questionContainer.textContent = ''
}

function gameOver() {
    clearInterval(timerInterval)
}

function newQuestion() {

}


//  Listeners
startButton.addEventListener('click', startGame)