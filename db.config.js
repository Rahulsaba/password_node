const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // Logs queries for debugging
});

// Function to check database connection
async function checkDBConnection() {
  try {
    await prisma.$connect(); // Explicitly connect to the database
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}
// Call the function when the script runs
checkDBConnection();

module.exports = prisma;