//Declare global variables
var words = ["pelican", "calhoun","harriet","nokomis","mantrap","minnetonka","itasca","vermillion"]; 
var guessCount = 12;									
var wins = 0;												
var answerArray = [];
var wrongGuess = []; 
var wordChoice;
var remainingLetters;

// function to initalize random word selection
function selectWord() {
	wordChoice = words[Math.floor(Math.random()* words.length)];
	for (var i=0; i < wordChoice.length; i++) {
		answerArray [i] = "_ ";
	}	
	document.getElementById("hold").innerHTML=(answerArray.join(" "));
	document.getElementById("guessCounter").innerHTML=guessCount;
	console.log(wordChoice);
}

//call selectWord funciton on window load
window.onload = selectWord();

//game function
document.onkeyup = function(event) {
	
	var remainingLetters = wordChoice.length;

	// while(remainingLetters>0 && guessCount>0) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();

		//working loop
		// for (var j=0; j<wordChoice.length; j++){
		// 		if (wordChoice[j] === userInput){
		// 		answerArray[j] = userInput;
		// 		document.getElementById("hold").innerHTML=(answerArray.join(" "));
		// 	} else if (wordChoice.indexOf(userInput)===-1){
		// 		wrongGuess.push(userInput);
		// 		console.log(wrongGuess)
		// 		// console.log(wrongGuess.slice(-1));
		// 		document.getElementById("letters").innerHTML = wrongGuess[0];userInput +", ";
		// 	} 
		// };

		for (var j=0; j<wordChoice.length; j++){
					if (wordChoice[j] === userInput){
					answerArray[j] = userInput;
					document.getElementById("hold").innerHTML=(answerArray.join(" "));
					} 
				};

		if ((wrongGuess.indexOf(userInput)===-1) && (wordChoice.indexOf(userInput)===-1)){
			wrongGuess.push(userInput);
			document.getElementById("letters").innerHTML = wrongGuess +",   ";
		}
	};
		// if (wordChoice.indexOf(userInput)===-1){
		// 				wrongGuess.push(userInput);
		// 				// wrongGuess = wordChoice[j];
		// 				console.log(wrongGuess)
		// 				// console.log(wrongGuess.slice(-1));
		// 				document.getElementById("letters").innerHTML = wrongGuess +",   ";
		// 			} 
		// 		};
	
		// for (var k=0; k<wrongGuess.length; k++){
		// 	if(wrongGuess.indexOf(userInput)!==-1){
		// 		var wrongLetter = wrongGuess[k];
		// 		console.log(typeof(wrongLetter));
		// 		document.getElementById("letters").innerHTML = wrongLetter +", ";
		// 	}
		// 	else {
		// 		console.log(wrongGuess);
		// 	}
		// }
		// function eliminateDuplicates(wrongGuess) {
		// 	 var out = [];
		// 	 var obj = {};
		// 	 for (var k=0; k<wrongGuess.length; k++) {
		// 	 	obj[wrongGuess[k]]=0;
		// 	 }
		// 	 for (k in obj){
		// 	 	out.push(k);
		// 	 }
		// 	return out;
		// }

		//
	// 	// }
	// 	remainingLetters--;
	// 	guessCount--;
	// 	// document.getElementById("letters").innerHTML = (wrongGuess.join(","));
	// 	document. getElementById("guessCounter").innerHTML = guessCount
	// }
	// endGame(); ////find a place to call the function
// };
//create an end game function
// function endGame() {
// 	console.log("endGame");
// 	if (remainingLetters===0 && guessCount >=0) {
// 		wins ++
// 		document. getElementById("winCounter").innerHTML = 	wins;
// 	} else {
// 		document. getElementById("winCounter").innerHTML = 	"Sorry, try again!";
// 	}
// };

// //if it's a win, then use answerArray to remove eit, if not it can stay to be guessed again
// //call end game function


// // game reset function

// function gameReset(){
// 	//remove randomly generated word from 
// 	// if(words.indexOf(answerArray) > -1) {
// 	// 	Words.splice(wordChoice,1)
// 	// }
// 	wrongGuess = [];
// 	answerArray = [];
// 	selectWord();
// }

// gameReset();