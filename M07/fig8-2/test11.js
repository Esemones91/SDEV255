// Using deleteOne() to delete client “Clinton”




const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydb_test")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

// Define the schema
const clientSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

// Create the Client model
const Client = mongoose.model("Client", clientSchema);

// Delete and list clients
async function deleteAndListClients() {
  try {
    const deleteResponse = await Client.deleteOne({ lastname: "Clinton" });
    console.log("After Clinton's removal:");
    console.log("Delete response:", deleteResponse);

    const clients = await Client.find();
    console.log("Remaining clients:", clients);
  } catch (err) {
    console.error("Error:", err);
  }
}

deleteAndListClients();
