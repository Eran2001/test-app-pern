const express = require('express');
const db = require('./config/db.js');

const app = express();

app.get('/api/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});