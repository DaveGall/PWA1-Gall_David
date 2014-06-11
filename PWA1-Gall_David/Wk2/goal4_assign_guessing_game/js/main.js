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
    //dom.button.onkeydown(validateInput());
    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNaN(playersGuess)){//Put in valid information
            console.log("Please enter a number!!");

        }if(playersGuess < randomNum){
            console.log("Your guess is too low!");
        }if(playersGuess > randomNum){
            console.log("Your guess is too high!");
        }else{
            console.log("You guessed my number");
        }
    };

})();

