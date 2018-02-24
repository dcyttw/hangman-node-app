var Letter = function(character) {
	this.character = character;
	this.guessed = false;
	this.toString = function() {
		if (this.guessed === true) {
			return this.character;
		} else
			return "_";
	};
	this.correct = function(userGuess) {
		if (this.character === userGuess) {
			this.guessed = true;
			return true;
		}
		return false;
	};
};

module.exports = Letter;