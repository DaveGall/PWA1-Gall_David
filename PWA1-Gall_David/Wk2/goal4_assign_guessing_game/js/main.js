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

    var randomNum = Math.floor(Math.random() * 10) + 1;//This line gets a random number between 1 and 10 for each round.
    console.log(randomNum);//This displays the results of the variable randomNum to make sure I am getting a random number.
    var guess = 0;
    var dom = {//Object
        input: document.querySelector("#input"),//references the input field of the HTML.
        output: document.querySelector("#output"),//References the output of the HTML
        button: document.querySelector("button")//References the button of the HTML.
    };

        //i = dom.button.onclick;
      dom.button.onclick = function() {//Beginning of the function that tells the code to press the guess button to display results when clicked.

        var validateInput = function () {//Beginning of the function that will run the users guess
            var playersGuess = parseInt(dom.input.value);//Creates a variable for the users guess by pulling the value from the input field.


            if (isNaN(playersGuess)) {//Put in valid information
                result = "Please enter a number.";
            }
            else if ((playersGuess < 1) || (playersGuess > 10)) {//If the guess is out of the 1 - 10 range.
                result = "Please enter a number between 1 and 10.";//This will display if out of range.
            }
            else if (playersGuess < randomNum) {//If the users guess is too low.
                result = "Your guess is too low!";//This will display.
            }
            else if (playersGuess > randomNum) {//If the users guess is too high.
                result = "Your guess is too high!";//This will display
            } else if (playersGuess === randomNum) {//If the users guess is right.
                result = "You guessed my number!";//This will display.
            }
            return result;//This will return the result of the correct conditional.


        };

          var guessCheck = validateInput();
          for(var i = 0; i < 3; i++){
              if(guessCheck !== "You guessed my number!" ){
                  guess++;
                  alert('Take another shot');
              }else{
                  alert(guessCheck);
                  break;
              }
          }
          //alert(validateInput(randomNum));
        //document.getElementById("output");


        console.log(validateInput(randomNum));//This line runs the random number through the validateInput function.

     };






    //dom.button.onclick(randomNum);
//validateInput(9);
   //var answer = dom.button.onkeydown(validateInput());

})();

