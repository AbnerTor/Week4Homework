let startButton = document.getElementById('startButton');
let nextButton = document.getElementById('nextButton');
let startOver = document.getElementById('startOver');
let questionContainer = document.getElementById('questionContainer')
let answersContainer = document.getElementById('answersDiv')


const questionsArray = [
    {
        question: 'What does "HTML" stand for?',
        answer0: 'Hypertext Markup Language',
        answer1: 'Hyper Toll Madeup Language', 
        answer2: 'Herbert Tim Marl and Luke', 
        answer3: 'Hot Takoyaki, Miso and Leek',
        correctAnswer: 0
    },
    {
        question: 'What year was Javascript first introduced',
        answer0: '2001', 
        answer1: '1995', 
        answer2: '1998', 
        answer3: '1994',
        correctAnswer: 1
    },
    {
        question: "You can use Javascript on the front end as well as on the backend",
        answer0: 'True',
        answer1: 'False', 
        answer2:'Maybe', 
        answer3: "I'm not sure",
        correctAnswer: 0
    },
    {
        question: "*Bonus Question* Whos is Magnus Carlsen?",
        answer0: 'A writer', 
        answer1: 'A soccer player',
        answer2: 'A movie director', 
        answer3: 'A chess player',
        correctAnswer: 'A chess player'
    }
]

avaialableQuestions = [...questionsArray]

var timeDiv = document.querySelector("#timer");

// Selects element by id
var mainDiv = document.getElementById("mainDiv");

var secondsLeft = 30;

function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDiv.textContent = secondsLeft + " seconds left till until time is up.";

        if (secondsLeft === 0) {
            timeDiv.textContent = 'Time is up';
            clearInterval(timerInterval)
        }

    }, 1000);
}


function getQuestion() {
    questionsIndex = Math.floor(Math.random() * avaialableQuestions.length);
    currentQuestion = avaialableQuestions[questionsIndex];
    questionContainer.innerHTML = currentQuestion.question;

    answersContainer.forEach(function(answers) {
        var 
    })
}

function startQuiz() {
    var defaultScore = 0;

}

function addScore(name, score) {
    newScore = {
        name: name,
        score: score
    };
}


startButton.addEventListener('click', startTimer())