/**
 * GUESSING GAME:
 *
 * Created By: David Gall
 * Date: 06/11/14
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    var randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);

    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };
    dom.button.onclick = function() {

        var validateInput = function () {
            var playersGuess = parseInt(dom.input.value);


            if (isNaN(playersGuess)) {//Put in valid information
                result = "Please enter a number.";
            }
            else if ((playersGuess < 1) || (playersGuess > 10)) {
                result = "Please enter a number between 1 and 10.";
            }
            else if (playersGuess < randomNum) {
                result = "Your guess is too low!";
            }
            else if (playersGuess > randomNum) {
                result = "Your guess is too high!";
            } else if (playersGuess === randomNum) {
                result = "You guessed my number!";
            }
            return result;
        };

        console.log(validateInput(randomNum));
    };


    //dom.button.onclick(randomNum);
//validateInput(9);
   //var answer = dom.button.onkeydown(validateInput());

})();

