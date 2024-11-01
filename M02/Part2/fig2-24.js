var lastname = "Clinton";
var firstname = "Bill";

// old way of concatenating strings and varaibles
var s1 = "Last name is " + lastname + ", first name is " + firstname;

// new way of concatenating strings and variables
var s2 = `Last name is ${lastname}, first name is ${firstname}`;

// display strings
console.log("s1 = ", s1);
console.log("s2 = ", s2);