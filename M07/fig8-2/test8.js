// Displaying clients whose lastname is “Clinton” or firstname is “Barack”



const mongoose = require("mongoose");

async function run() {
  try {
    // Connect to MongoDB using Mongoose 8.x defaults
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb_test");
    console.log("Connected to MongoDB");

    // Define the schema
    const clientSchema = new mongoose.Schema({
      lastname: { type: String, required: true },
      firstname: { type: String, required: true },
      address: { type: String, default: "" },
    });

    // Create the Client model associated with the "clients" collection
    const Client = mongoose.model("Client", clientSchema);

    // Query clients with lastname "Clinton" or firstname "Barack"
    const clients = await Client.find({
      $or: [{ lastname: "Clinton" }, { firstname: "Barack" }],
    });

    // Display the results
    console.log(clients);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}

// Run the function
run();
