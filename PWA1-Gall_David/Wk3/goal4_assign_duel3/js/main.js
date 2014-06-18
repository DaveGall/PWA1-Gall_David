//David Gall, 06/17/2014, Dual Part2

(function(){

    /*var playerOneName = "Kabal";//Variable for player ones name.
    var playerTwoName = "Kratos";//variable for player twos name
    //Player damage
    var player1Damage = 20;//variable for Damage that is inflicted on each player
    var player2Damage = 20;//variable for Damage that is inflicted on each player
    //Player health
    var playerOneHealth = 100;//Variable for the starting health of player one
    var playerTwoHealth = 100;//Variable for the starting health of player two*/
    //Player Names
    //var fighter1 = ['Kabul', 20, 100];//Assigns player ones name, damage, and starting health.
    //var fighter2 = ['Kratos', 20, 100];//Assigns player twos name, damage and starting health.
    console.log(" ** Fight **");
    var fighter1_txt = document.querySelector("#scores").querySelector("kabal");
    var fighter2_txt = document.querySelector("#scores").querySelector("kratos");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");

    button.addEventListener("click", fight, false);

    var fighters = [
        {
            name: "Kabul",
            damage: 20,
            health: 100
        },
        {
            name: "Kratos",
            damage: 20,
            health: 100
        }
    ];

    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name+":"+fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name+":"+fighters[1].health;

    var round = 0;//Start on round zero so after the first fight call it says you are done with round one.

    function fight(){//The fight function
       //console.log("In the fight function");//This was a step to check to see if the code path was correct.
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);//The beginning alert to start the fight.
        //alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);//The beginning alert to start the fight.
        var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);//Variable to determine a random number to subtract from each player at the end of each round.
        var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);//Variable to determine a random number to subtract from each player at the end of each round.
    /*   for(var i = 0; i < 10; i++){//Takes the variable i and runs through the loop as long as its below 10.

           var minDamage1 = fighter1[1] * .5;//Variable equation for the damage to each player.
           var minDamage2 = fighter2[1] * .5;//Variable equation for the damage to each player.

          


           fighter1[2]-=f1;//This subtracts the players health by the amount of damage from the prior variables.
           fighter2[2]-=f2;//This subtracts the players health by the amount of damage from the prior variables.
           console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]);
           //console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);//This was a print out to see if the code was giving us the results we were looking for.

           var results = winnerCheck();//This is a variable that will check to see if there is a winner after each round.
           console.log(results);//Displays the results to the console.

           if(results === "no winner"){//If this condition is true then it will run the next line
               round++;//This will progress the fight another round
               alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);//Displays the results after each round.

           }else{//This else statement will display the results once the if statement is false and there is a winner.
               alert(results);//Will display the results
               break;//stops the code from running once there is a winner.
           };
       };
    };*/

    function winnerCheck(){//This code is to determine the parameters of how a winner is crowned.
        console.log("in winnerCheck FN");
        var result = "no winner";//Variable to display the results of this function

        if(fighter1[2] < 1 && fighter2 < 1){//If this condition is true then the following result will display.
            result = "You both die";//Display if above code is true
        }else if(fighter1[2] < 1){//If this condition is true then the code below will display
            result = fighter2[0]+" WINS!!!";//Code to display if the results of the above condition are true.
        }else if(fighter2[2] < 1){//Condition to check to see if all the other conditions returned false then this will display.
            result = fighter1[0]+" WINS!!!";//Code that displays if the above statement is true.
        }
        return result;//Returns a value for the results of the function.
    };
    //console.log("program starts here");
    fight();//Runs the function for fight.

})();//End of program.