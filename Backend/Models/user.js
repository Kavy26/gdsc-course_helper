const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// User schema not directly defined here, as we use raw queries
// Make sure the users table exists in your PostgreSQL database
