import mongoose from "mongoose";

// Corrected MongoDB URI without 'nextdata'
const mongo_URL =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/mydatabase?retryWrites=true&w=majority";

const mongooseData = (app) => {
  mongoose
    .connect(mongo_URL)
    .then(() => {
      console.log("Mongoose DB is connected successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default mongooseData;
