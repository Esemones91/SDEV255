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

var p = new Person("Clinton", "Bill", 33);
console.log("Variable p = ", p);
p.display();