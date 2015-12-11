(function () {
    var app = angular.module('rubenMemenozModule', []);
    
    app.controller('RubenMemenozController', function () {
        this.currentYear = new Date().getFullYear();
        
        this.getMaxImageNumber = function() {
            return new Array(72);
        }
        /*this.minNumber = 1;
        this.maxNumber = 100;
        this.guessedNumber = "";
        this.resultClass = "";
        this.result = "";
        
        this.hasName = function () {
            return this.playerName.length > 0;
        };
        
        this.isPlaying = false;
        
        this.setPlaying = function (val) {
            this.isPlaying = val;
            
            if (!this.isPlaying) {
                this.playerName = "";
                this.guessedNumber = "";
                this.result = "";
                this.setAnswer();
            }
        };
        
        this.displayResultMessage = function () {
            if (this.guessedNumber < this.answer) {
                this.result = "Guess Higher";
                this.resultClass = "largeText higher";
            } else if (this.guessedNumber === this.answer) {
                this.result = "You got it!";
                this.resultClass = "largeText correct";
            } else if (this.guessedNumber > this.answer) {
                this.result = "Guess Lower";
                this.resultClass = "largeText lower";
            }
        };
        
        this.setAnswer = function () {
            this.answer = Math.floor(Math.random() * (this.maxNumber - this.minNumber)) + this.minNumber;
        };
        
        this.setAnswer();*/
    });
})();
