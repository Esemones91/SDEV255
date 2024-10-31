class Person {
    // class properties
    firstname = "";
    lastname = "";
    age = 0;

    // class methods
    display() {
        console.log("The person's last name is = " +
            this.lastnmae + ", first name = " + 
            this.firstname);
    }
}

var p = new Person;
console.log("Variable p = ", p);
p.display();