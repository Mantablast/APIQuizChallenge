//Multiple choice
var questions = [
    {q: "How do you reference a javascript file from your html?", a: "a) <link ref='script.js'>$use()", b: "b) $on.load*&populate.script.js", c: "c) <script src='./assets/js/script.js'></script>", d: "d) Yoohoo javascript, Come here!", ans:"c"}, 
    {q: "How do you prompt a user to type in an answer, in the browser?", a: "a) aler('type answer here')", b: "b) prompt('please type in the textbox provided')", c: "c) Not possible", d: "d) With jquery", ans: "b"}, 
    {q: "What characters are used to start text on \na new \n line?", a: "a) &new", b: "b) *nl", c: "c) ~new", d: "d) backslash with letter n", ans: "d"},
    {q: "Variables can include other variables.", a: "a) Absolutely", b: "b) Only if the internal variable is a string", c: "c) Only if presented in an array", d: "d) Nope", ans: "a"},
    {q: "A variable outside of a function is a:", a: "a) global variable", b: "b) logical operator", c: "c) an object", d: "d) local variable.", ans: "a"}
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
var getUserName = document.querySelector("#user-list");
var scoreInfo = document.querySelector("#score-list");
var highscores = " ";
var getUserName =" ";


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

//Create questions 
function startQuiz() {

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
    
console.log("Score" + score);
document.getElementById("next").addEventListener("click", clearNext); 
};
function pickedAnswerA() {
    var userchoice = "a";
    if(userchoice === (questions[currentQindex].ans)) {
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        nextQ.textContent = "Click here for next question";
    }
    else {
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        nextQ.textContent = "Click here for next question";
        var timer = timer-10;
    }   
}
function pickedAnswerB() {
    var userchoice = "b";
    if(userchoice === (questions[currentQindex].ans)) {
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        nextQ.textContent = "Click here for next question";
    }
    else {
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        nextQ.textContent = "Click here for next question";
        var timer = timer-10;
    }
}
function pickedAnswerC() {
    var userchoice = "c";
    if(userchoice === (questions[currentQindex].ans)) {
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        nextQ.textContent = "Click here for next question";
    }
    else {
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        nextQ.textContent = "Click here for next question";
        var timer = timer-10;
    }   
}
function pickedAnswerD() {
    var userchoice = "d";
    if(userchoice === (questions[currentQindex].ans)) {
        displayResult.textContent = "That's correct!  Point scored!";
        score ++;
        nextQ.textContent = "Click here for next question";
    }
    else {
        displayResult.textContent = "No dice, beans'n rice.  No point scored.";
        nextQ.textContent = "Click here for next question";
        var timer = timer-10;
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
    var scores = [{username : score}];
    var username = (prompt("Way to go!  Your score is " + score + "\r\nPlease enter your username...\r\nPlease do not include any personal or sensitive information."))
    if(getUserName === "") {
        prompt("Username cannot be blank");
        scores = [{" " : " "}];
    }
    else {
        alert("Success, onto the scores!");
        localStorage.setItem("scores", JSON.stringify(scores));
        
        
    }

    console.log("Username: " + username + " Score: " + score)
    window.location = './score.html'; 
    // username.push(scores);
    scores.push(scores);
};

function highScoreRead() {
    window.location = './score.html'
}
 //Event listeners
  document.getElementById("button-style").addEventListener("click", initialClick);
  document.getElementById('display-box-b').style.visibility = "hidden";
  document.getElementById("button-style").addEventListener("click", revealQuestions);
  document.getElementById("button-style").addEventListener("click", hideStart);
  document.getElementById("high-score").addEventListener("click", highScoreRead);
  document.onload

//   renderLastRegistered(null, null);

