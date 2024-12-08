const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect("mongodb://localhost/mydb_test")
  .then(() => console.log("Connected to mydb_test database"))
  .catch((err) => console.error("Database connection error:", err));

// Define the schema
const clientSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  address: String,
});

// Create the Client model associated with the "clients" collection
const Client = mongoose.model("Client", clientSchema);

console.log("Before the create() statement");

async function run() {
  try {
    // Use Client.create() to save the document in the database
    const doc = await Client.create({
      lastname: "Obama",
      firstname: "Barack",
      address: "Washington",
    });
    console.log("The client is inserted into the collection", doc);
  } catch (err) {
    console.error("Error inserting client:", err);
  } finally {
    console.log("After the create() statement");
    mongoose.connection.close(); // Close the database connection
  }
}

// Execute the function
run();
