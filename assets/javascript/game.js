//Declare global variables
var words = ["pelican", "calhoun","harriet","nokomis","mantrap","minnetonka","itasca","vermillion"]; 
var guessCount = 12;   //count of guesses									
var wins = 0;		   // count of wins
var answerArray = [];  //array for comparinguser input to the selected word
var wrongGuess = [];   //array to hold wrong guesses
var wordChoice;        // rand
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
}

//call selectWord funciton on window load
window.onload = selectWord();

//game function
document.onkeyup = function(event) {
	
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

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
	
	if ((remainingLetters===0) || (guessCount <0)) {
		// endGame();
		wins++;
		console.log(wins);
		document. getElementById("winCounter").innerHTML = 	wins;
		gameReset();
	}
}

//resetting the game while keeping the number of wins
function gameReset(){
	//remove randomly generated word from the array if it's a win
	// if(words.indexOf(answerArray) > -1) {man
	// 	Words.splice(wordChoice,1)
	// }
	wrongGuess = [];
	answerArray = [];
	counter = 0
	guessCount = 12
	document.getElementById("letters").innerHTML = " ";
	document. getElementById("guessCounter").innerHTML = " ";
	// document. getElementById("loss").innerHTML = " ";
	selectWord();
}

