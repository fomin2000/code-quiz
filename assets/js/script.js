// Globals
var startButton = document.querySelector('.startGame')
var timeAmount = document.querySelector('.timeLeft')


var mainInfo = document.querySelector('.mainInfo')
var titleContainer = document.querySelector('.titleContainer')
var containerTitle = document.querySelector('.containerTitle')
var titleIntro = document.querySelector('titleIntro')


var choice1 = document.querySelector('.choice1')
var choice2 = document.querySelector('.choice2')
var choice3 = document.querySelector('.choice3')
var choice4 = document.querySelector('.choice4')



var hiddenElement = document.querySelector('.hiddenDiv')
var questionTitle = document.querySelector('.questionTitle')
var choicesList = document.querySelector('.choices')
var amountCorrect = document.querySelector('.amountCorrect')

var hiddenCorrect = document.querySelector('.hidden3')
var hiddenWrong = document.querySelector('.hidden4')

var endMessage = document.querySelector('.hidden2')

var currentAnswer;

var correct = 0

var questionsAnswered = 0



// for (let i = 0; i < listStyles.length; i++) {
    // listStyles[i].setAttribute("style", "width: 33%; height: 50px; background-color: rebeccapurple; border: 1px solid rebeccapurple; border-raidus: 5px;")}

var initialTime = 60
var timeLeft = null
var isCorrect = null

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
// var questions = ['People that write code are called: ', 'Which document mostly answers for styling?', 'JavaScript is used for: ', 'HTML is an acronym for: ', 'In html, an <ol> is reffered to: ']

var questions = [
    {
        question: 'People that write code are called: ',
        answers: ['Manufacturers', 'Cryptographers', 'Programmers', 'Professors'],
        correctAnswer: 'Programmers',
    },
    {
        question: 'Which document mostly answers for styling?',
        answers: ['CSS', 'HTML', 'JavaScript', 'C++'],
        correctAnswer: 'CSS',
    },
    {
        question: 'JavaScript is used for: ',
        answers: ['skeleton page markup', 'styling', 'functionality', 'Can be used for all of the above'],
        correctAnswer: 'Can be used for all of the above',
    },
    {
        question: 'HTML is an acronym for: ',
        answers: ['Hello There Mr Larry', 'HyperText Markup Language', 'Header Title Main Link', 'None of the above'],
        correctAnswer: 'HyperText Markup Language',
    },
    {
        question: 'In html, an <ol> is reffered to: ',
        answers: ['Ordered List', 'Unordered List', 'List Item', 'Table Row'],
        correctAnswer: 'Ordered List',
    },
    
]


timeAmount.textContent = 0

function hideMain() {
    mainInfo.style.display = 'none'
}

function showQuestion () {
    hiddenElement.style.display = 'block'
}

function startTimer() {
    timeLeft = initialTime
    var timerInterval = setInterval(function () {
        timeLeft--
        timeAmount.textContent = timeLeft
        if(timeLeft <= 0) {
            clearInterval(timerInterval)
            timeAmount.textContent = 0
            displayMessage()
        } else if (questionsAnswered > 4){
            clearInterval(timerInterval)
            timeAmount.textContent = 0
            displayMessage()
            hiddenElement.style.display = 'none'
        }
    }, 1000)
}

function endGame() {
    timeLeft = 0
    displayMessage()
}

function displayMessage() {
    endMessage.style.display = 'block'
    amountCorrect.textContent = `Number of answers correct: ${correct}`
}

function startGame(e) {
    e.preventDefault()
    hideMain()
    showQuestion ()
    startTimer()


    var question1 = getQuestion()
    newQuestion(question1)
    
}


function newQuestion(questionObj) {
    getQuestion() 

    var title = questionObj.question
    var choices = questionObj.answers
    var answer = questionObj.correctAnswer
    currentAnswer = answer

    questionTitle.textContent = title
    choice1.textContent = choices[0]
    choice2.textContent = choices[1]
    choice3.textContent = choices[2]
    choice4.textContent = choices[3]

    hiddenCorrect.style.display = 'none'
    hiddenWrong.style.display = 'none'
}

function getQuestion() {
    var randomNumber = Math.floor(Math.random() * questions.length)
    return questions[randomNumber]
}




//  Listeners
startButton.addEventListener('click', startGame)

choicesList.addEventListener('click', function(e) {
    var usersPick = e.target.textContent

    if (usersPick === currentAnswer) {
        correct++
        questionsAnswered++
        var nextQuestion = getQuestion()
        newQuestion(nextQuestion)
        hiddenCorrect.style.display = 'block'
    } else {
        questionsAnswered++
        timeLeft = timeLeft - 10
        var nextQuestion = getQuestion()
        newQuestion(nextQuestion)
        hiddenWrong.style.display = 'block'
    }
    console.log(questionsAnswered)
})

console.log(questionsAnswered)