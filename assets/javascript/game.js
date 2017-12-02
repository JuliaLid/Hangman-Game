//Declare global variables
var words = ["pelican", "calhoun","harriet","nokomis","mantrap"]; 
var guessCount = 12;									
var wins = 0;												
var answerArray = [];
var wrongGuess =  [];
var wordChoice;

// function to initalize random word selection
function selectWord() {
	wordChoice = words[Math.floor(Math.random()* words.length)];
	for (var i=0; i < wordChoice.length; i++) {
		answerArray [i] = "_ ";
	}	
	document.getElementById("hold").innerHTML=answerArray;
	document.getElementById("guessCounter").innerHTML=guessCount;
}

//call selectWord funciton on window load
window.onload = selectWord();

//game function
document.onkeyup = function(event) {
	
	var remainingLetters = wordChoice.length;

	while(remainingLetters>0 && guessCount>0) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		for (var j=0; j<wordChoice.length; j++){
			if (wordChoice[j] === userInput){
				answerArray[j].push(userInput);
				document.getElementById("hold").innerHTML=answerArray;
			} else if (wrongGuess.indexOf(userInput)!== 1){
				wrongGuess.push(userInput);
				document.getElementById("letters").innerHTML = userInput + ", "; 
			} else {
				wrongGuess += wrongGuess;
			}
		}
		remainingLetters--;
		guessCount--;
		document. getElementById("guessCounter").innerHTML = 	guessCount
	}
};