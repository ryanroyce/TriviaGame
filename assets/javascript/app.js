// global variables: correct, incorrect, unanswered, timer
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredCount = 0;
// to start question timer at 30 seconds
var countdownStart = 10;

// Hides the divs on global level before start button is pressed
$("#container2").hide();
$("#container3").hide();
// on click function to start game
$("#startButton").on("click", function(){
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

// Counts down and displays the time to the user
function countdown(){
	// Decrement the counter
	countdownStart--;
	// Display the countdownStart timer
    $('#timer').html("Time Remaining: " + countdownStart + " Seconds");

		// clears the timer so it doesnt count the result twice when it gets to zero also
		clearInterval();
		// Finish the game after the timer reaches 0
		if(countdownStart === 0){
			// Hide the game div from the user, results div to be shown at end of game
            $("#container2").hide();
			};
    };
	
	$("#doneButton").on("click", function(){
		timeUp();
		$("#container2").hide();
		});
		
	// Function to be run after the timer equals 0
	function timeUp(){
		// Checks values of Radio Buttons
		var wine1 = $('input:radio[name="wine1"]:checked').val();
		var wine2 = $('input:radio[name="wine2"]:checked').val();
		var wine3 = $('input:radio[name="wine3"]:checked').val();
		var wine4 = $('input:radio[name="wine4"]:checked').val();
		var wine5 = $('input:radio[name="wine5"]:checked').val();
		var wine6 = $('input:radio[name="wine6"]:checked').val();
		var wine7 = $('input:radio[name="wine7"]:checked').val();
		// if else statements to determine the right/wrong/unanswered counts
		if(wine1 === "2"){
			correctAnswer++;
		}
		else if(wine1 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine2 === "0"){
			correctAnswer++;
		}
		else if(wine2 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine3 === "1"){
			correctAnswer++;
		}
		else if(wine3 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine4 === "1"){
			correctAnswer++;
		}
		else if(wine4 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine5 === "3"){
			correctAnswer++;
		}
		else if(wine5 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine6 === "1"){
			correctAnswer++;
		}
		else if(wine6 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};

		if(wine7 === "3"){
			correctAnswer++;
		}
		else if(wine7 === undefined){
			unansweredCount++;
		}
		else{
			incorrectAnswer++;
		};
		// displays the correct, incorrect, unanswered
		$("#container3").show();
		$('#correct').html('Correct Answers: ' + correctAnswer);
		$('#incorrect').html('Incorrect Answers: ' + incorrectAnswer);
		$('#unanswered').html('Unanswered Questions: ' + unansweredCount);
	};


