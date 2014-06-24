/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */

var names = ["Dave", "Maria", "Bill", "Jill", "Larry"];
var people = [];
var row1 = document.getElementById("r1c1");
var row2 = document.getElementById("r2c1");
var row3 = document.getElementById("r3c1");
var rows = [row1, row2, row3];
var randomName = names[Math.floor(Math.random() * names.length)];
var randomRows = rows[Math.floor(Math.random() * rows.length)];



console.log("These are the random rows: ",randomRows);









/*for(var i = 0; i <= 3; i++){

    people.push(names);
    console.log(people);

    }
*/
