//Declare global variables
var words = ["PELICAN", "CALHOUN","HARRIET","NOKOMIS","MANTRAP","MINNETONKA","ITASCA","VERMILLION"]; 
var guessCount = 12;   //count of guesses									
var wins = 0;		   // count of wins
var answerArray = [];  //array for comparinguser input to the selected word
var wrongGuess = [];   //array to hold wrong guesses
var wordChoice;        // random word selected from the array
var remainingLetters;
var counter =0; //counts successful guesses


// function to initalize random word selection
function selectWord() {
	wordChoice = words[Math.floor(Math.random()* words.length)];
	for (var i=0; i < wordChoice.length; i++) {
		answerArray [i] = "_ ";
	}
	console.log(wordChoice);	
	document.getElementById("hold").innerHTML=(answerArray.join(" "));
	document.getElementById("guessCounter").innerHTML=guessCount;
	document.getElementById("reset").style.visibility = 'hidden';
}

//call selectWord funciton on window load

window.onload = selectWord();

//game function
document.onkeyup = function(event) {
	
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	
	for (var j=0; j<wordChoice.length; j++){
		if (wordChoice[j] === userInput){
		answerArray[j] = userInput;
		document.getElementById("hold").innerHTML=(answerArray.join(" "));
		
		counter+=1; //increment counter for correct guess
			
		remainingLetters = wordChoice.length - counter;  //identify the number remaining letters
		} 
	};


	if ((wrongGuess.indexOf(userInput)===-1) && (wordChoice.indexOf(userInput)===-1)){
		wrongGuess.push(userInput);
		document.getElementById("letters").innerHTML = wrongGuess +",   ";
	};

	guessCount--; //decrement the number of guesses regardless of outcome
	document. getElementById("guessCounter").innerHTML = guessCount;
	
	if ((guessCount===0) && (remainingLetters>0)) {
			console.log ("You lost")
			document. getElementById("guessCounter").innerHTML = "Sorry, you're out of guesses";
			gameEnd();
	} else 

	if ((guessCount>0) && (remainingLetters <=0)) {
			wins++;
			document. getElementById("winCounter").innerHTML = 	wins;
			document. getElementById("guessCounter").innerHTML = guessCount + " guesses left. You are so smart!";
			gameEnd();
	};
}


function gameEnd() {
	document.getElementById("reset").style.visibility = 'visible';

	// console.log("Game over. Please stop input!")
		// document.body.addEventListener("keydown", function stopInput(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	this.removeEventListener("keydown",stopInput);
	// 	});
}

//resetting the game while keeping the number of wins
function gameReset(){
	wrongGuess = [];
	answerArray = [];
	counter = 0;
	guessCount = 12;
	document.getElementById("letters").innerHTML = " ";
	document. getElementById("guessCounter").innerHTML = " ";
	selectWord();
};

