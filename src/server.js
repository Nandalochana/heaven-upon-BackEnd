const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

/**
 * Get port from environment and store in Express.
 */
const PORT = process.env.PORT || 5000;

/**
 * Connect to MongoDB and start the server.
 * Handles errors gracefully and logs them for debugging.
 */
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server due to DB connection error:", error.message);
    process.exit(1); // Exit process if DB connection fails
  });