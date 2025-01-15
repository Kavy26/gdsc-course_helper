const express = require("express");
const { Pool } = require("pg");
const authenticateToken = require("../middleware/auth");

const router = express.Router();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Get all courses
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM courses");
  res.json(result.rows);
});

// Create course (requires authentication)
router.post("/", authenticateToken, async (req, res) => {
  const { name, description } = req.body;
  await pool.query("INSERT INTO courses (name, description) VALUES ($1, $2)", [
    name,
    description,
  ]);
  res.status(201).send("Course created");
});

// Update course (requires authentication)
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await pool.query("UPDATE courses SET name = $1, description = $2 WHERE id = $3", [
    name,
    description,
    id,
  ]);
  res.send("Course updated");
});

// Delete course (requires authentication)
router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  res.send("Course deleted");
});

module.exports = router;
