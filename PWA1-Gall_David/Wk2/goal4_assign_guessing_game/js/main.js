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

    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNaN(playersGuess)){//Put in valid information
            document.write("Please enter a number!!");

        }
    };

})();