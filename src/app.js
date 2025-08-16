const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const userRoutes = require("./routes/userRoutes");

const app = express();

/**
 * Middleware setup
 */
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan("dev")); // Log HTTP requests

/**
 * Swagger API documentation route
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * Root route - Welcome message
 */
app.get("/", (req, res) => {
  res.send("Welcome to the Heaven Upon Backend API");
});

/**
 * User routes
 */
app.use("/api/users", userRoutes);

/**
 * Health check endpoint
 */
app.get("/health", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

/**
 * Global error handler for uncaught errors
 */
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    },
  });
});

module.exports = app;