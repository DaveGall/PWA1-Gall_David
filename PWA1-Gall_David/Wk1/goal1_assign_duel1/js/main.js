//David Gall, 06/06/2014, Dual Part1

(function(){
    //Player Names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";
    //Player damage
    var player1Damage = 20;
    var player2Damage = 20;
    //Player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;

    function fight(){
       console.log("In the fight function");
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
       for(var i = 0; i < 10; i++){
          console.log(i);
       };
    };

    function winnerCheck(){};
    console.log("program starts here");
    fight();

})();