// starting variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredNumber = 0;

// to start question timer at 30 seconds
var countdownStart = 10;

// to iterate through my answers index later on
var arrayIndex = 0;

// variables for use later with timer
var setIntervalID;
var setTimeoutID;


// List of Questions and Answers in an array
var questions = [{
    question: "What is the dominant grape in Chianti wines?",
    answers: ["Cabernet Sauvignon", "Nebbiolo", "Sangiovese", "Tempranillo"],
    correctAnswer: "Sangiovese",
    image: "assets/images/wine1.gif"
},
{
    question: "What does appellation refer to in France?",
    answers: ["Place of origin", "Wines with an apple flavor", "Year the wine was made", "Wines from the mountains"],
    correctAnswer: "Place of origin",
    image: "assets/images/wine2.gif"
},
{
    question: "Reducing the grape crop usually does what for the resulting wines?",
    answers: ["Lowers the alcohol level", "Intensifies the flavor", "Lowers the price", "Dilutes the fruit qualities"],
    correctAnswer: "Intensifies the flavor",
    image: "assets/images/wine3.gif"
},
{
    question: "Why are red wines usually aged in oak barrels?",
    answers: ["Stainless steel tanks spoil wine", "To improve the wine's ability to age", "Oak barrels are cheaper", "To greatly improve the color"],
    correctAnswer: "To improve the wine's ability to age",
    image: "assets/images/wine4.gif"
},
{
    question: "What can salty foods do to tannic wine?",
    answers: ["Diminish the tannins", "Enhance the acidity", "Make the wine seem sweet", "Make the wine seem even more tannic"],
    correctAnswer: "Make the wine seem even more tannic",
    image: "assets/images/wine5.gif"
},
{
    question: "If a wine is described as hot it most likely means what?",
    answers: ["Was harvested during Summer", "Has too high an alcohol content", "Is served warmer than room temp", "Is spicy"],
    correctAnswer: "Has too high an alcohol content",
    image: "assets/images/wine6.gif"
},
{
    question: "By law, the word Reserve may only be placed on which US made wines?",
    answers: ["Rare vintages", "Wines aged in French Oak", "Wines aged at least 10 years", "Any wine"],
    correctAnswer: "Any wine",
    image: "assets/images/wine7.png"
},
];

// onclick function to start game
$("#start").on("click", function () {
    $("#start").remove();
    // calls gamestart to initialize game that is going to be written later
    gameStart();
});


// count down function that accesses timer div and starts decrementing down from 10
// currently still keeps going when it gets past zero though.....
function countDownTimer() {
    $("#timer").html(countdownStart);
    countdownStart --;

};


// function to call questions and possible answers from the array and prints them all to the DOM
function getQuestion() {
    clearInterval(setIntervalID);
    setIntervalID=setInterval(countDownTimer,1000);
    $("#quiz-area").html(questions[arrayIndex].question);
    
    for (var i=0;i<questions[arrayIndex].answers.length;i++) {
        $("#quiz-area").append("<button class='choice'>"+ questions[arrayIndex].answers[i]  +"</button>");
    };
    // $(".choice").on("click", function(){
    //     var label = $(".choice").text();
    //     $(".choice").text('');
    //     var buttonValue = $(".choice").val();
    //     $(".choice").text(label);
    //     console.log(buttonValue);
    // });

};


function checkAnswer(){
    
};





// defining gamestart that was called earlier
function gameStart() {
    getQuestion();
};

// function clicked() {
//     clearInterval(setIntervalID);
// };


// $(document).on("click", "#quiz-area", gameStart;




