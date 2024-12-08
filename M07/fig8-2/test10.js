// Using updateOne() to modify the address of “Clinton”



const mongoose = require("mongoose");

// Connect to MongoDB with proper options for Mongoose 8.8.x
mongoose.connect("mongodb://localhost:27017/mydb_test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Connection error:", err);
  });

// Define the schema with stricter validation (optional)
const clientSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true }); // Automatically handle createdAt and updatedAt fields

// Create the Client model associated with the "clients" collection
const Client = mongoose.model("Client", clientSchema);

// Update the address of "Clinton" using async/await
async function updateAddress() {
  try {
    const response = await Client.updateOne(
      { lastname: "Clinton" }, 
      { $set: { address: "New York" } } // Using $set for clarity and atomicity
    );

    if (response.matchedCount === 0) {
      console.log("No document found with the specified filter.");
    } else {
      console.log("Update successful:", response);
    }
  } catch (err) {
    console.error("Error updating address:", err);
  }
}

// Call the update function
updateAddress();
