// Connecting to the mydb_test database (test.js file)

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
console.log("Connecting to mydb_test database in progress...");