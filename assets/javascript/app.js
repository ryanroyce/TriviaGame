// starting variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredNumber = 0;

// to append quiz area later on
var card = $("quiz-area");
// to start question timer at 30 seconds
var countStartNumber = 30;

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
// 30 seconds
var setIntervalID;
var setTimeoutID;

function gameStart(){
    clearInterval(setIntervalID);
    setIntervalID=setInterval(getQuestion, 30000);

    function getQuestion(){

    };
};

$("#start").on("click", function(){
gameStart();
});

gameStart();
