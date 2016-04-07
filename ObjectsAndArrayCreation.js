/**
 * Instructions Create an object called mary. It has the same properties as bob.
 * Her name is Mary Johnson, her phoneNumber is "(650) 888 - 8888" and her email
 * is "mary.johnson@example.com". Create an array called contacts. Put bob in
 * first (at index 0), then mary (at index 1). Write a console.log statement
 * that prints out Mary's phone number.
 */


// bob object
var bob = {
	firstName : "Bob",
	lastName : "Jones",
	phoneNumber : "(650) 777-7777",
	email : "bob.jones@example.com"
};

// mary object

var mary = {
	firstname : "Mary",
	lastname : "Johnson",
	phoneNumber : "(650) 888 - 8888",
	email : "mary.johnson@example.com"
};

// create contacts array
var contacts = [ bob, mary ];

console.log(mary.phoneNumber);