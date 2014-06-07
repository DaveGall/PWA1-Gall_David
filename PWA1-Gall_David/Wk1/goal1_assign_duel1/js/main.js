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

           var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
           var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

           playerOneHealth-=f1;
           playerTwoHealth-=f2;
           console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
               round++;
               alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);

           }else{
               alert(results);
               break;
           };
       };
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result = "no winner";

        if(playerOneHealth < 1 && playerTwoHealth < 1){
            result = "You both die";
        }else if(playerOneHealth < 1){
            result = playerTwoName+" WINS!!!";
        }else if(playerTwoHealth < 1){
            result = playerOneName+" WINS!!!";
        }
        return result;
    };
    console.log("program starts here");
    fight();

})();