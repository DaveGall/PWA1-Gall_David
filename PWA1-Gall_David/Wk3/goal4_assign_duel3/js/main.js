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
    var fighter1_txt = document.querySelector("#kabal").querySelector("p");
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");
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

    function onClick(){
        fight();
    }

    function fight() {//The fight function

        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);//The beginning alert to start the fight.
        //alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);//The beginning alert to start the fight.
        var minDamage1 = fighters[0].damage * .5;//Variable equation for the damage to each player.
        var minDamage2 = fighters[1].damage * .5;//Variable equation for the damage to each player.
        var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);//Variable to determine a random number to subtract from each player at the end of each round.
        var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);//Variable to determine a random number to subtract from each player at the end of each round.


        fighters[0].health -= f1;//This subtracts the players health by the amount of damage from the prior variables.
        fighters[1].health -= f2;//This subtracts the players health by the amount of damage from the prior variables



        var results = winnerCheck();//This is a variable that will check to see if there is a winner after each round.
        round_txt.innerHTML = "ROUND NUMBER "+round+" Results";
        round++;

         if(results === "no winner"){//If this condition is true then it will run the next line
         fighter1_txt.innerHTML = fighters[0].name+":"+fighters[0].health;
         fighter2_txt.innerHTML = fighters[1].name+":"+fighters[1].health;
             //round_txt.innerHTML = "Round "+ round+" complete";
            // console.log("Round: "+ round);

         }else{//This else statement will display the results once the if statement is false and there is a winner.
             fighter1_txt.innerHTML = results;
             fighter2_txt.innerHTML = "";
             round_txt.innerHTML = results;
             button.removeEventListener("click", fight, false);
             console.log(results);

         }




        function winnerCheck() {//This code is to determine the parameters of how a winner is crowned.

            var result = "no winner";//Variable to display the results of this function


            if (fighters[0].health < 1 && fighters[1].health < 1) {//If this condition is true then the following result will display.
                result = "YOU BOTH DIE!!";//Display if above code is true

            } else if (fighters[0].health < 1) {//If this condition is true then the code below will display
                result = fighters[1].name + " WINS!!!";//Code to display if the results of the above condition are true.


            } else if (fighters[1].health < 1) {//Condition to check to see if all the other conditions returned false then this will display.
                result = fighters[0].name + " WINS!!!";//Code that displays if the above statement is true.

            }
            return result;//Returns a value for the results of the function.
        }
    }



})();//End of program.