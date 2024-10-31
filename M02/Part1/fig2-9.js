class Person {
    // class properties
    firstname = "";
    lastname = "";
    age = 0;

    // class methods
    constructor(lastname, firstname, age) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
    }

    display() {
        console.log("The person's last name is = " +
            this.lastname + ", first name = " + 
            this.firstname + ", age = " + this.age);
    }
}

var p = {lastnmae : "Clinton", firstname :  "Bill"};
console.log("p (before modification of p2) = ", p);

var p2 = {...p};
p2.city = "Washington";
console.log("p (after modification of p2) = ", p);
console.log("p2 = ", p2);