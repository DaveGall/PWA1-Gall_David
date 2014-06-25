/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */
var numPeeps = 3;
var people = [];
var names = ["Dave", "Maria", "Bill", "Jill", "Larry"];
var interval;




var randomName = [names[Math.floor(Math.random() * names.length)]];
var randomRows = rows[Math.floor(Math.random() * rows.length)];




    for (var i = 0; i < numPeeps; i++) {//Cycles through and chooses only three names from my names list.
        var newPeeps = Math.floor(Math.random() * names.length);
        var person = new Person(names[newPeeps], i+1);

        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job, "r"+(i+1)+"c2");
        people.push(names[newPeeps]);
        names.splice(newPeeps, 1);
    }
    console.log("This is the new people: ", people);
var row = [];
for (var ii = 0; ii < 3; ii++) {//Cycles through and chooses only three names from my names list.
    var newRows = Math.floor(Math.random() * rows.length);
    row.push(rows[newRows]);
    rows.splice(newRows, 1);
}






/*var person = new Person(names[people],row);
function Person(){

}*/

var populateHTML = function(){

    for(var iii=0; iii < people.length; iii++){
        document.getElementById().innerHTML = people;
        row.innerHTML = people;

    }


};

populateHTML();
/*






function runUpdate (){

    people.forEach(function(element){

        element.update();

    });

}*/

//setInterval(runUpdate, 1000 / 30);