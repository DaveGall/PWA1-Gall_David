/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */

var names = ["Dave", "Maria", "Bill", "Jill", "Larry"];
var row1 = document.getElementById("r1c1");
var row2 = document.getElementById("r2c1");
var row3 = document.getElementById("r3c1");
var rows = [row1, row2, row3];
var randomName = [names[Math.floor(Math.random() * names.length)]];
var randomRows = rows[Math.floor(Math.random() * rows.length)];

var items = [1, 2, 3, 4, 5];
var people = [];

for(var i = 0; i < 3; i++) {
    var newPeeps = Math.floor(Math.random() * names.length);
    people.push(names[newPeeps]);
    names.splice(newPeeps, 1);
}

console.log("This is the new people: ", people);


var noName = [
    new Person([randomName],randomRows),
    new Person([randomName],randomRows),
    new Person([randomName],randomRows)
];

var populateHTML = function(){
    console.log(people);
    document.getElementById("r1c1").innerHTML = randomName;
};

//console.log(people);


populateHTML();




/*for(var i = 0; i <= 3; i++){

    people.push(names);
    console.log(people);

    }
*/
