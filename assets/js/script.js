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


function hideStart() {
    document.getElementById('button-style').style.visibility = "hidden";
};
//Starting timer and quiz
function initialClick () {
    var fiveMinutes = 60 * 2,
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
            alert("Oh no!  You ran out of time.  Please enter your username...")
            // highScore(score);  to be created
        }
        
    }, 1000);
}

function revealQuestions() {
    document.getElementById("display-box-b").style.visibility = "visible";  
};

//Create questions loop
function startQuiz(questions) {

//Attempt to loop questions through the upper display box

for (i = 0; i < questions; i++) {
    var currentQ = document.querySelector("question-text");
    currentQ.textContent += questions[i].q;

}

};



document.getElementById("button-style").addEventListener("click", initialClick);
document.getElementById('display-box-b').style.visibility = "hidden";
document.getElementById("button-style").addEventListener("click", revealQuestions);
document.getElementById("button-style").addEventListener("click", hideStart);




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



