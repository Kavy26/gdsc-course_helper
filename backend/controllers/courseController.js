const pool = require('../models/db');

exports.getCourses = async (req, res) => {
  const result = await pool.query('SELECT * FROM courses');
  res.json(result.rows);
};

exports.createCourse = async (req, res) => {
  const { name, description } = req.body;
  const result = await pool.query(
    'INSERT INTO courses (name, description) VALUES ($1, $2) RETURNING *',
    [name, description]
  );
  res.json(result.rows[0]);
};
