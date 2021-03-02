var startButton = document.getElementById("startButton")
const questionContainerEL = document.getElementById('questionContainer')
const bodyContainer = document.getElementsByClassName('container')
var question
var answerContainer = document.getElementById("answer-box");
var mainEl = document.getElementsByClassName(".header")
var question1 = ["What is Polyphia?"]
var question2 = ["What is the best number?"]
var question3 = ["Do you own a fancy keyboard?"]
var question4 = ["What is Avagadros number?"]
var question5 = ["Who was the first person to calculate the circumfrence of the Earth?"]
var question6 = ["Whos is the instuctor for this bootcamp?"]
var ans1 = ["A band", true]
var ans2 = ["0", true]
var ans3 = ["Yes", true]
var ans4 = ["6.02214*10^23", true]
var ans5 = ["Eratosthenes", true]
var ans6 = ["Stephan Woosley", true]
var questions = [question1, question2, question3, question4, question5, question6]
var answers = [ans1, ans2, ans3, ans4, ans5, ans6]
var timeLeft = 30

function timer() {
    setInterval(function() {
        if (timeLeft === 0 ) {
            clearInterval(timeLeft = 0)
        }
    }, 1000)
}
startButton.addEventListener('click', timer)
console.log(timer)
function startgame() {
    
}
//for (let i = 60; i <= 60; i--)
//function setTime() {
//    var timerInterval = setInterval(function(){
//        timeEL.textContent = "Time until quiz is over: " + secondsLeft--;
//
//        if(secondsLeft === 0) {
//            clearInterval(timerInterval);
//            sendMessage();
//
//
//        }
//    },1000);
//}

function sendMessage(){
    if (secondsLeft === 0){
    timeEL.textContent = ("The time is over.");
    }
}


//setTime();

2