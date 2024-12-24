const pool = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const secret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
  res.sendStatus(201);
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  const user = result.rows[0];

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.encode({ id: user.id }, secret);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
