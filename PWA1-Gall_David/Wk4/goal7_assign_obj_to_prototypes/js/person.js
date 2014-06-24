/**
 * David Gall
 * Class: PWA1
 * Goal: Goal7 week 4 final project
 * 06/24/14
 */

window.Person=Person;
Person.jobs = ["Broker", "Vet", "Chef", "Manager"];
Person.actions = ["Running", "Flying", "Jumping", "Cooking"];

var randomJobs = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
var randomActions = Person.actions[Math.floor(Math.random() * Person.actions.length)];
console.log("This is the Jobs: ", randomJobs);
console.log("This is the actions: ", randomActions);