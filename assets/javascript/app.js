// correct, incorrect, unanswered, timer
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredCount = 0;
// to start question timer at 10 seconds
var countdownStart = 10;
// variables for use later with timer
var setIntervalID;

// on click function to start game
$("#start_button").on("click", function(){
	// remove the start div about button is clicked
	$("#container1").remove();
	// Show the questions div
	$("#container2").show();
	// to be defined next
	startTimer();
	});

// defines start timer, decrement rate is 1 second
function startTimer(){
	setInterval(countdown, 1000);
	};

// Hides the divs on global level before start button is pressed
$("#container2").hide();
$("#container3").hide();
