const db = require('../config/db.js');

const getUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password_hash } = req.body;

  if (!first_name || !last_name || !email || !password_hash) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(checkUserQuery, [email]);

    if (result.rows.length > 0) {
      return res.status(400).send('Email is already registered');
    }
    const insertQuery = 'INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *';
    const newUser = await db.query(insertQuery, [first_name, last_name, email, password_hash]);
  } catch (error) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getUsers,
  registerUser,
}