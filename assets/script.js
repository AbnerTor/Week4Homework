
const questions= [
    {
        question: 'What does "HTML" stand for?',
        answers: ['Hypertext Markup Language', 'Hyper Toll Madeup Language', 'Herbert Tim Marl and Luke', 'Hot Takoyaki, Miso and Leek'],
        correctAnswer: 0
    },
    {
        question: 'What year was Javascript first introduced',
        answers: ['2001', '1995', '1998', '1994'],
        correctAnswer: 2
    },
    {
        question: "You can use Javascript on the front end as well as on the backend",
        answers: ['True', 'False', 'Maybe', "I'm not sure"],
        correctAnswer: 1
    },
    {
        question: 'What does API stand for',
        answers: ['Associated Philanthropic Insubordinates', 'Applied Physics Internation', 'Application Programming Interface', 'Abundant Pacifist Idealists'],
        correctAnswer: 2
    },
    {
        question: "*Bonus Question* Whos is Magnus Carlsen?",
        answers: ['A writer', 'A soccer player', 'A movie director', 'A chess player'],
        correctAnswer: 3
    }
]


var contentHeader = document.getElementById("contentHeader");
var contentContainer = document.getElementById("contentContainer");
var buttonDiv = document.getElementById("startButton");
var rightWrong = document.getElementById("rightWrong");
var displayTimer = document.getElementById("timer");
var startQuizButton = document.getElementById('startQuiz')

var qNumber;
var timer;
var quizTimer;

// startQuizButton.addEventListener('click', startQuiz)
startQuiz();


function startQuiz() {
    timer = 75;
    qNumber = 0;

    contentHeader.innerHTML= "This is a quiz";
    contentContainer.innerHTML= "Answer the questions correctly and you will add points to your score, answer incorrectly and you will have time deducted. Good luck.";
    displayTimer.innerHTML = timer;

    var startButton = document.createElement("button");
    startButton.innerHTML = "Start the quiz!";
    buttonDiv.appendChild(startButton);

    startButton.addEventListener("click", function () {
        startTimer();
        displayQuestions(questions);
        startButton.remove();
    });

    var scoreContainer = document.getElementById("scoreContainer");
    scoreContainer.addEventListener("click", displayScores);
}

function startTimer() {
    quizTimer = setInterval(function () {
        timer--;
        if (timer === 0) {
            displayTimer.innerHTML = 0;
            stopQuiz();
            clearInterval(quizTimer);
        }
        else {
            displayTimer.innerHTML = timer;
        }
    }, 1000);
}

function displayQuestions(questions) {
    var currentQ = questions[qNumber];
    var list = document.createElement("ul");

    contentHeader.innerHTML = currentQ.question;
    contentContainer.innerHTML = '';

    for (i = 0; i < currentQ.answers.length; i++) {
        var listItem = document.createElement("li");

        if (i === currentQ.correct) {
            listItem.setAttribute("data-correct", "true");
        }
        else {
            listItem.setAttribute("data-correct", "false");
        }
        listItem.setAttribute("id", "list#" + i);
        listItem.style.cursor = "pointer";

        listItem.innerText = (i + 1) + ". " + currentQ.answers[i];
        contentContainer.appendChild(list);
        list.appendChild(listItem);

        document.getElementById("list#" + i).addEventListener("click", function () {
            if (this.getAttribute("data-correct") === "true") {
                rightWrong.setAttribute("style", "display:all");
                rightWrong.innerHTML = "Correct!";
            }
            else {
                rightWrong.setAttribute("style", "display:all");
                rightWrong.innerHTML = "Incorrect!";
                // prevent a negative timer
                if (timer >= 11) {
                    // subtract 10 seconds
                    timer -= 10;
                }
            }

            if (qNumber < (questions.length - 1)) {
                qNumber++;
                return displayQuestions(questions);
            }
            else {
                stopQuiz();
            }
        });
    }
}

function stopQuiz() {
    displayTimer.innerHTML = timer;
    clearInterval(quizTimer);
    stopQuiz = 0;

    contentHeader.innerHTML = "All done!";
    contentContainer.innerHTML = 'Your final score is: ' + timer + '<br>Enter initials: ';

    var nameBox = document.createElement("input");
    nameBox.setAttribute("type", "text");
    nameBox.setAttribute("style", "margin-top: 10px;");
    nameBox.addEventListener("focus", function () {
        rightWrong.remove();
        nameBox.setAttribute("style", "background: lightgray;");
    });
    nameBox.addEventListener("blur", function () {
        nameBox.setAttribute("style", "background: white;");
    });
    contentContainer.appendChild(nameBox);

    var newButton = document.createElement("button");
    newButton.innerHTML = "Save initials";
    newButton.setAttribute("style", "margin-left: 5px;");
    contentContainer.appendChild(newButton);

    newButton.addEventListener("click", function () {
        if (!nameBox.value) {
            alert("Please input your initials!");
        }
        else {
            addScore(nameBox.value, timer);
            displayScores();
        }
    });
}

// add username and score to localstorage
function addScore(name, score) {
    newScore =
    {
        name: name,
        score: score
    };

    if (!localStorage.getItem("quizScore")) {
        var newScoreArray = [];
        newScoreArray.push(newScore);
        localStorage.setItem("quizScore", JSON.stringify(newScoreArray));
    }
    else {
        var oldScoreArray = JSON.parse(localStorage.getItem("quizScore"));
        oldScoreArray.push(newScore);
        localStorage.setItem("quizScore", JSON.stringify(oldScoreArray));
    }
}

function displayScores() {
    clearInterval(quizTimer);
    displayTimer.innerHTML = "75";

    contentHeader.innerHTML = "Here are the high scores: ";
    contentContainer.innerHTML = "";
    buttonDiv.innerHTML = "";

    if (!localStorage.getItem("quizScore")) {
        contentContainer.innerHTML = "No scores yet! Play the game!";
    }
    else {
        var oldScoreArray = JSON.parse(localStorage.getItem("quizScore"));

        oldScoreArray.sort(function (a, b) {
            return b.score - a.score;
        });

        var scoreList = document.createElement("ul");
        for (i = 0; i < oldScoreArray.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.innerHTML = (i + 1) + ". " + oldScoreArray[i].name + " - " + oldScoreArray[i].score;
            scoreItem.setAttribute("id", "score" + i);
            scoreList.appendChild(scoreItem);
            contentContainer.appendChild(scoreList);
        }
    }
    var goBackBtn = document.createElement("button");
    goBackBtn.innerHTML = "Take quiz again";
    goBackBtn.setAttribute("style", "margin-right: 5px; background-color: white; padding: 3;");
    buttonDiv.appendChild(goBackBtn);

    var resetScore = document.createElement("button");
    resetScore.innerHTML = "Clear High Scores";d
    button.appendChild(resetScore);

    var qNumber = 0;
    var timer = 75;

    goBackBtn.addEventListener("click", startQuiz());

    resetScore.addEventListener("click", function () {
        localStorage.removeItem("quizScore");
        contentHeader.innerHTML = "Here are the high scores: ";
        contentContainer.innerHTML = "Cleared high scores. Now go play again!";
        return displayScores;
    });
}