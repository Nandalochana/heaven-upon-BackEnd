const mongoose = require("mongoose");

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * The connection URI is read from the environment variable DB_URI.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${process.env.DB_URI}`);
  } catch (error) {
    // Log the error with stack trace for better debugging
    console.error("MongoDB connection failed:", error.message);
    console.error(error.stack);
    // Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;