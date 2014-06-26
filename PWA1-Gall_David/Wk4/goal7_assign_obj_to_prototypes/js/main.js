/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */
(function() {

    console.log("This is main.js");

    var numPeeps = 3;//variable that sets the number of people to display at 3.
    var people = [];//Array to store the results of the for loop below.
    var names = ["Dave", "Maria", "Bill", "Jill", "Larry"];//name array that the for loop will pull from.
    var interval;//variable that will be used set and terminate the interval timing.


    for (var i = 0; i < numPeeps; i++) {//Cycles through and chooses only three names from my names list.
        var newPeeps = Math.floor(Math.random() * names.length);//Randomly grabs names out of the names array.
        var person = new Person(names[newPeeps], i + 1);//This will add a person to the People object.

        populateHTML(person.name, "r" + (i + 1) + "c1");//This will update the HTML with a random name in column one.
        populateHTML(person.job, "r" + (i + 1) + "c2");//This will update the HTML with a random job in column two.

        people.push(person);//This will push the name taken from the names array and place it into the people array.
        names.splice(newPeeps, 1);//This will remove the name from the names array.

    }

    clearInterval(interval);//This clears the interval.
    interval = setInterval(runUpdate, 10000 / 30);//This line sets up the interval at which the function will update.

    function populateHTML(date, field) {//This is the function that will run when called with populateHTML
        var id = document.getElementById(field);//This grabs the second parameter passed through the function from the HTML document.
        id.innerHTML = date;//This line writes the new information to the HTML

    }

    function runUpdate() {
        people.forEach(function (element) {//This function will run when called by the runUpdate keywords.

            element.update();
        })

    }


})();



















