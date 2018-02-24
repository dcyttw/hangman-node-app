var Letter = require("./Letter");

var Word = function(word) {
	this.countFound = 0;
	this.letterArray = [];
	for (var i = 0; i < word.length; i++) {
		this.letterArray.push(new Letter(word[i]));
	}
	this.displayWord = function() {
		return this.letterArray.join(" ");
	}
	this.checkLetter = function(userGuess) {
		var found = false;
		for (var i = 0; i < this.letterArray.length; i++) {
			if (this.letterArray[i].correct(userGuess)) {
				found = true;
				this.countFound++;
			}
		}
		return found;
	}
}

module.exports = Word;