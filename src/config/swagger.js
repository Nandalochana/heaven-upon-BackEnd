const swaggerJsdoc = require("swagger-jsdoc");

/**
 * Swagger configuration options for API documentation.
 */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Heaven-Upon BackEnd API",
      version: "1.0.0",
      description: "API documentation Heaven-Upon BackEnd API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the route files for annotations
};

/**
 * Generates the Swagger specification using the provided options.
 * Handles errors gracefully and logs them for debugging.
 */
let swaggerSpec;
try {
  swaggerSpec = swaggerJsdoc(options);
} catch (error) {
  console.error("Failed to generate Swagger specification:", error.message);
  swaggerSpec = {}; // Return an empty object if generation fails
}

module.exports = swaggerSpec;