/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */
(function() {

    console.log("This is main.js");
    var numPeeps = 3;
    var people = [];
    var names = ["Dave", "Maria", "Bill", "Jill", "Larry"];
    var interval;


    for (var i = 0; i < numPeeps; i++) {//Cycles through and chooses only three names from my names list.
        var newPeeps = Math.floor(Math.random() * names.length);
        var person = new Person(names[newPeeps], i + 1);

        populateHTML(person.name, "r" + (i + 1) + "c1");
        populateHTML(person.job, "r" + (i + 1) + "c2");

        people.push(person);
        names.splice(newPeeps, 1);

    }
    console.log("These are the people: ", people+person);
    clearInterval(interval);
    interval = setInterval(runUpdate, 10000 / 30);

    function populateHTML(date, field) {
        var id = document.getElementById(field);
        id.innerHTML = date;
    }

    function runUpdate() {
        people.forEach(function (element) {

            element.update();
        })

    }


})();



















