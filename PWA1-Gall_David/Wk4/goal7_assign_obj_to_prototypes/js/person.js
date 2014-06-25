/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */

(function(){


window.Person=Person;

Person.jobs = ["Vet", "Chef", "Producer", "Actress", "Programmer"];
Person.actions = ["Cooking", "Running", "Singing", "Drinking"];

function Person(name, row){
    console.log("New Peeps: ", name);

    this.name = name;
    this.action = Person.action[Math.floor(Math.random() * Person.action.length)];
    this.job = Person.job[Math.floor(Math.random() * Person.job.length)];
    this.row = row;
    var id = document.getElementById("r"+this.row+"c3");
    id.innerHTML = this.action;
}














});