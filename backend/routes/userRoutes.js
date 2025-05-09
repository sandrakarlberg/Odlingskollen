import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// --- Routes ---

// Server test
router.get('/', (req, res) => {
  res.status(200).json('Server is live');
});

router.get('/api/get-users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

router.post('/api/create-users', async (req, res) => {
  try {
    await pool.query('INSERT INTO users (name, password) VALUES ($1 , $2)', [
      req.body.name,
      req.body.email, // bör förmodligen vara req.body.password?
    ]);

    res.json({
      message: `Added name: ${req.body.name} and email/password: ${req.body.email} to database `,
    });
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

// Login fungerar inte än - users är inte definierad! Kanske egen route?
router.post('/api/login', (req, res) => {
  res
    .status(501)
    .json({ message: 'Login endpoint needs to be implemented properly' });
});

export default router;
