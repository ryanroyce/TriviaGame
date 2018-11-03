// starting variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredNumber = 0;

// to start question timer at 30 seconds
var countStartNumber = 10;

// to iterate through my answers index later on

var arrayIndex = 0;

// List of Questions and Answers in an array
var questions = [{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how old would George Washington be today if he was still alive?",
    answers: ["1776", "dirt", "2018", "Six foot eight"],
    correctAnswer: "a fair amount",
    image: "assets/images/nirvanabark.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
{
    question: "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["a lot", "a little", "a fair amount", "no wood at all"],
    correctAnswer: "a fair amount",
    image: "assets/images/toystory.gif"
},
];
// variables for use later with timer
var setIntervalID;
var setTimeoutID;


// onclick function to start game
$("#start").on("click", function () {
    $("#start").remove();
    // calls gamestart to initialize game that is going to be written later
    gameStart();
});

// count down function that accesses timer div and starts decrementing down from 10
// currently still keeps going when it gets past zero though.....
function countDownTimer() {
    $("#timer").html(countStartNumber);
    countStartNumber --;

};

// function to call questions and possible answers from the array and prints them all to the DOM
function getQuestion() {
    clearInterval(setIntervalID);
    setIntervalID=setInterval(countDownTimer,1000);
    $("#quiz-area").html(questions[arrayIndex].question);
    
    for (var i=0;i<questions[arrayIndex].answers.length;i++) {
        $("#quiz-area").append("<button>"+ questions[arrayIndex].answers[i]  +"</button>");
    }
};


// defining gamestart that was called earlier
function gameStart() {
    getQuestion();

};



