var Word = require("./Word");

var inquirer = require('inquirer');

var words = ["apple", "banana", "blueberry", "cherry", "durian", "grape", "kiwi", "mango", "orange", "papaya", "peach", "pear", "pineapple", "raspberry", "strawberry", "watermelon"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var guessRemain = 6;
console.log("Hangman Game - fruit edition")
console.log("");
var word = new Word(randomWord);
keepPromptingUser();

function keepPromptingUser() {
	if(guessRemain > 0){
		console.log(word.displayWord());
		inquirer.prompt([
		{
			type: "input",
			name: "letter",
			message: "Guess a Letter! "
		}
		]).then(function(userInput){
			if (word.checkLetter(userInput.letter) === false){
				guessRemain--;
				console.log("INCORRECT!!!");
				console.log(guessRemain + " guesses remaining!!!");
				console.log("");
			} else {
				console.log("CORRECT!!!");
				console.log("");
				if (word.countFound === randomWord.length) {
					console.log(word.displayWord());
					console.log("You got it right!");
					return;
				}
			}
			keepPromptingUser();
		});
	} else {
		console.log("You lose!");
		console.log("The word was " + randomWord);
	}
}