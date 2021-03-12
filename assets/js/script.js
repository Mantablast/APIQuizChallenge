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
var quizQuestion = document.getElementById('display-box-a');
var optionsContainer = document.getElementById('display-box-b');
var displayResult = document.getElementById('resultDisplay');
var submitButton = document.getElementsByClassName('start-btn');



//Create questions loop
function startQuiz(questions) {
//Attempt to loop questions through the upper display box
for (i = 0; i < questions.length; i++) {
    //How do I display the first question.

// TODO: Check the user's answer against the correct answer
if(answer[i] === questions[i].ans) {
    score ++;
    //Display the user is correction in the results display
}
else(
    //Display the user is incorrect in the results display
    console.log("wrong answer")
)
}
console.log("i am alive");
};

document.getElementById("button-style").addEventListener("click", startQuiz);