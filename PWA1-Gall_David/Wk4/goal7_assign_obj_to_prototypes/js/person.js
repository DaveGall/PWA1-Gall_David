/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */


(function() {
console.log("This is person.js");
    window.Person = Person;//Makes the Person object a global variable that can be used by the main.js file also.

    Person.jobs = ["Vet", "Chef", "Producer", "Actress", "Programmer"];//Declares a variable array that is added to the Person object as jobs.
    Person.actions = ["Cooking", "Running", "Singing", "Drinking"];//Declares a variable array that is added to the Person object as actions.

    function Person(name, row) {//Advanced object called Person that can be added to and used to handle a lot of information
        console.log("New Peeps: ", name);

        this.name = name;//Accesses the name to the Person object and gives it a value of name which is passed through as the second argument.
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];//Randomly grabs actions form the actions array
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];//Randomly grabs jobs from the jobs array.
        this.row = row;//This sets row to the second argument run through the object.
        var id = document.getElementById("r" + this.row + "c3");//This grabs the row 1 from the HTML.
        id.innerHTML = this.action;//Writes the results to the HTML page.
    }


    Person.prototype.update = function () {//This function runs the udater that will change the actions in column 3.
        if (Math.floor(Math.random()) < .01) {//Keeps running as long as Math.floor is less than .01.
            var i = Math.floor(Math.random() * Person.actions.length);//Sets the variable i to the random actions.
            this.action = Person.actions[i];//This runs the variable i through the Persons.action object.
            var id = document.getElementById("r" + this.row + "c3");//Grabs the random row from the HTML.
            id.innerHTML = this.action;//Writes the random action to the random row in column 3.

        }
    };
})();











