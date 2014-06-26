/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */


(function() {
console.log("This is person.js");
    window.Person = Person;

    Person.jobs = ["Vet", "Chef", "Producer", "Actress", "Programmer"];
    Person.actions = ["Cooking", "Running", "Singing", "Drinking"];

    function Person(name, row) {
        console.log("New Peeps: ", name);

        this.name = name;
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
        this.row = row;
        var id = document.getElementById("r" + this.row + "c3");
        id.innerHTML = this.action;
    }


    Person.prototype.update = function () {
        if (Math.floor(Math.random()) < .01) {
            var i = Math.floor(Math.random() * Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r" + this.row + "c3");
            id.innerHTML = this.action;

        }
    };
})();











