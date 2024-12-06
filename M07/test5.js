// Using the save() instance method to save document



// updated code
const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect("mongodb://localhost/mydb_test")
  .then(() => console.log("Connected to mydb_test database"))
  .catch((err) => console.error("Database connection error:", err));

// Create the schema
const clientSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  address: String,
});

// Create the Client model associated with the "clients" collection
const Client = mongoose.model("Client", clientSchema);

async function run() {
  try {
    // Create the document in memory
    const client = new Client({
      lastname: "Clinton",
      firstname: "Bill",
      address: "Washington",
    });

    console.log("Before the save() statement");

    // Save the document to the database
    await client.save();
    console.log("The client is inserted into the collection");

    console.log("After the save() statement");
  } catch (error) {
    console.error("Error saving the client:", error);
  }
}

// Run the function
run();
