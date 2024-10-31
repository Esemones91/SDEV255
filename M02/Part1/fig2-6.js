class Person {
    // class properties
    firstname = "";
    lastname = "";
    age = 0;

    // class methods
    display() {
        console.log("The person's last name is = " +
            this.lastname + ", first name = " + 
            this.firstname);
    }
}

var p = new Person;

p.lastname = "Clinton";
p.firstname = "Bill";
console.log("Variable p = ", p);
p.display();