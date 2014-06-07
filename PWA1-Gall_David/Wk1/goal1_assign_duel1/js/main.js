//David Gall, 06/06/2014, Dual Part1

(function(){
    //Player Names
    var playerOneName = "Kabal";//Variable for player ones name.
    var playerTwoName = "Kratos";//variable for player twos name
    //Player damage
    var player1Damage = 20;//variable for Damage that is inflicted on each player
    var player2Damage = 20;//variable for Damage that is inflicted on each player
    //Player health
    var playerOneHealth = 100;//Variable for the starting health of player one
    var playerTwoHealth = 100;//Variable for the starting health of player two

    var round = 0;//Start on round zero so after the first fight call it says you are done with round one.

    function fight(){//The fight function
       console.log("In the fight function");//This was a step to check to see if the code path was correct.

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);//The beginning alert to start the fight.
       for(var i = 0; i < 10; i++){//Takes the variable i and runs through the loop as long as its below 10.

           var minDamage1 = player1Damage * .5;//Variable equation for the damage to each player.
           var minDamage2 = player2Damage * .5;//Variable equation for the damage to each player.

           var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);//Variable to determine a random number to subtract from each player at the end of each round.
           var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);//Variable to determine a random number to subtract from each player at the end of each round.

           playerOneHealth-=f1;//This subtracts the players health by the amount of damage from the prior variables.
           playerTwoHealth-=f2;//This subtracts the players health by the amount of damage from the prior variables.
           console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);//This was a print out to see if the code was giving us the results we were looking for.

           var results = winnerCheck();//This is a variable that will check to see if there is a winner after each round.
           console.log(results);

           if(results === "no winner"){//If this condition is true then it will run the next line
               round++;//This will progress the fight another round
               alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);//Displays the results after each round.

           }else{//This else statement will display the results once the if statement is false and there is a winner.
               alert(results);//Will display the results
               break;//stops the code from running once there is a winner.
           };
       };
    };

    function winnerCheck(){//This code is to determine the parameters of how a winner is crowned.
        console.log("in winnerCheck FN");
        var result = "no winner";//Variable to display the results of this function

        if(playerOneHealth < 1 && playerTwoHealth < 1){//If this condition is true then the following result will display.
            result = "You both die";//Display if above code is true
        }else if(playerOneHealth < 1){//If this condition is true then the code below will display
            result = playerTwoName+" WINS!!!";//Code to display if the results of the above condition are true.
        }else if(playerTwoHealth < 1){//Condition to check to see if all the other conditions returned false then this will display.
            result = playerOneName+" WINS!!!";//Code that displays if the above statement is true.
        }
        return result;//Returns a value for the results of the function.
    };
    console.log("program starts here");
    fight();

})();//End of program.