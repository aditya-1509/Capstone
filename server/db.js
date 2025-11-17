const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    // If already connected, just return
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "capstone", // optional: your DB name
      bufferCommands: false, // prevents buffering errors
      serverSelectionTimeoutMS: 10000, // prevents timeout error
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB Connected:", isConnected);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;
