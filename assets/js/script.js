//Multiple choice
var questions = [
    {q: "Do cats fly?", a: "a) Sometimes in the fall.", b: "b) On occasion", c: "c) After dark", d: "d) In my dreams", ans:"c"}, 
    {q: "Do bears fly?", a: "a) Sometimes in the winter.", b: "b) When you call them names", c: "c) Quite often", d: "d) No", ans: "b"}, 
    {q: "Do fish swim?", a: "a) Sometimes in the spring.", b: "b) With cheering", c: "c) Never", d: "d) After bribing", ans: "d"},
    {q: "Is Winnie the Pooh a bear?", a: "a) Barely.", b: "b) Pooh is an alien", c: "c) Nope", d: "d) Maybe", ans: "a"},
    {q: "Sharks eat people.", a: "a) When people are dumb", b: "b) Only if the last resort", c: "c) Might as well", d: "d) No", ans: "a"}
];

//Score to start at zero
var score= 0;
var quizQuestion = document.querySelector("#question-text");
var optionsContainer = document.querySelector("#display-box-b");
var displayResult = document.querySelector("#resultDisplay");
var submitButton = document.querySelector('start.btn');
var timerDisplay = document.getElementById('time-countdown');
var optionA = document.querySelector("#question-a");
var optionB = document.querySelector("#question-b");
var optionC = document.querySelector("#question-c");
var optionD = document.querySelector("#question-d");
var nextQ = document.querySelector("#next");
var userchoice = " ";
var currentQindex = 0;
var currentQ = questions[currentQindex];
// var scoreInfo = document.querySelector("#score-list");
var usernameInfo = document.querySelector("#user-list");
var newScore = document.querySelector("#user-list");
var highscores = document.querySelector("#score-list");

function hideStart() {
    document.getElementById('button-style').style.visibility = "hidden";
};
//Starting timer and quiz
function initialClick () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time-countdown');
    startTimer(fiveMinutes, display);
    revealQuestions();
    startQuiz();
};

//timer display coundown and alert
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Remaining " + minutes + ":" + seconds;

        if (--timer < 0) {
            alert("Oh no!  You ran out of time.  Your score is " + score + "\r\nPlease enter your username...\r\nPlease do not include any personal or sensitive information.")
            highScores();
            
        }
        
    }, 1000);
}

function revealQuestions() {
    document.getElementById("display-box-b").style.visibility = "visible";  
};

//Create questions loop
function startQuiz() {
// console.log(currentQindex);
//Attempt to loop questions through the upper display box
// for (i = 0; i < questions.length; i++) {
    console.log(currentQindex);
    var currentQ = document.getElementById("question-text");
    currentQ.textContent = questions[currentQindex].q;
    var currentA = document.getElementById("question-a");
    currentA.textContent = questions[currentQindex].a;
    var currentB = document.getElementById("question-b");
    currentB.textContent = questions[currentQindex].b;
    var currentC = document.getElementById("question-c");
    currentC.textContent = questions[currentQindex].c;
    var currentD = document.getElementById("question-d");
    currentD.textContent = questions[currentQindex].d;
    // console.log(questions[currentQindex]);
    
    document.getElementById("question-a").addEventListener("click", pickedAnswerA);
    document.getElementById("question-b").addEventListener("click", pickedAnswerB);
    document.getElementById("question-c").addEventListener("click", pickedAnswerC);
    document.getElementById("question-d").addEventListener("click", pickedAnswerD);
    
    
    
    
    
// }
console.log("Score" + score);
document.getElementById("next").addEventListener("click", clearNext); 
};
function pickedAnswerA() {
    var userchoice = "a";
    if(userchoice === (questions[currentQindex].ans)) {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
    else {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }   
}
function pickedAnswerB() {
    var userchoice = "b";
    if(userchoice === (questions[currentQindex].ans)) {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
    else {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
}
function pickedAnswerC() {
    var userchoice = "c";
    if(userchoice === (questions[currentQindex].ans)) {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
    else {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }   
}
function pickedAnswerD() {
    var userchoice = "d";
    if(userchoice === (questions[currentQindex].ans)) {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
    else {
        // displayResult = document.querySelector("#resultDisplay");
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        // nextQ = document.querySelector("next");
        nextQ.textContent = "Click here for next question";
    }
    
}

    
    function clearNext() {
        currentQindex++;
    var currentQ = document.getElementById("question-text");
    currentQ.textContent = "";
    var currentA = document.getElementById("question-a");
    currentA.textContent = "";
    var currentB = document.getElementById("question-b");
    currentB.textContent = "";
    var currentC = document.getElementById("question-c");
    currentC.textContent = "";
    var currentD = document.getElementById("question-d");
    currentD.textContent = "";
    displayResult.textContent = " ";
    nextQ.textContent = "";
    

    if(currentQindex === questions.length) {
        highScores();
    } else {
    
    startQuiz();
    }
};

function highScores() {
    console.log("End of questions")
    currentQindex += 0;
    var username = (prompt("Way to go!  Your score is " + score + "\r\nPlease enter your username...\r\nPlease do not include any personal or sensitive information."))
    if(username === "") {
        prompt("Username cannot be blank");
    }
    else {
        alert("Success, onto the scores!");
        localStorage.setItem('username', username);
        localStorage.setItem('score', score);
    }
    var newScore = {
        username: username,
        score: score
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location = './score.html';
    
    // document.getElementById('display-box-b').style.visibility = "hidden";
    
    // document.body.appendChild(display-box-a);
    renderLastRegistered();
};



// document.getElementById("resultDisplay").addEventListener("click", nextButton);


function renderLastRegistered() {
    // Retrieve the last email and password from localStorage using `getItem()`
    var usernameInfo = localStorage.getItem('username');
    var scoreInfo = localStorage.getItem('score');
  
    // If they are null, return early from this function
    if (username === null || score === null) {
      return;
    }
    else {
        usernameInfo.textContent = username;
        scoreInfo.textContent = score;
    }
    // Set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
    username.textContent = username;
    scoreInfo.textContent = score;
  };







  document.getElementById("button-style").addEventListener("click", initialClick);
  document.getElementById('display-box-b').style.visibility = "hidden";
  document.getElementById("button-style").addEventListener("click", revealQuestions);
  document.getElementById("button-style").addEventListener("click", hideStart);
  document.getElementById("high-score").addEventListener("click", highScores);
  document.onload

// consider the following:
//         <div id="question-container">
//             <h1 id="question-text"></h1>
//             <p id="question-a"></p>
//             <p id="question-b"></p>
//             <p id="question-c"></p>
//             <p id="question-d"></p>
//         </div>
//         Steps to take:
//         1. When page loads hide question-container
//         2. When User clicks start, hide start button then,show question-container
//         3. begin looping through questions
//         4. for each question iteration, you can target the question-text id to set its value equal to the first question text
//         5. them you can target the a,b,c,d id's and set those values to the corresponding answers

//Currently the first question is runnign as planned.  a next button element could be created to go to the next question
//and reset the index to the next question.  Try learning about index questions[currentQuestionIndex].answer)
//currentQuestionIndex++;  at the bottom of the loop

