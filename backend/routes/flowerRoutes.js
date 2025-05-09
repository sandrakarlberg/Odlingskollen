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

router.get('/api/:userId/get-flowers', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query(
      `SELECT users.user_id, users.name, flowers.flower_id, flowers.flower_name, flowers.last_watered, flowers.moisture, flowers.sunlight
           FROM users
           JOIN flowers ON users.user_id = flowers.user_id
           WHERE users.user_id = $1;`,
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

router.post('/api/:userId/add-flower', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query(
      `INSERT INTO flowers (
               user_id, flower_name, last_watered, watering_interval, moisture,
               flower_temp, dirt_temp, sunlight, nitrogen_level, phosphor, potatisum
             ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
      [
        userId,
        req.body.flower_name,
        req.body.last_watered,
        req.body.watering_interval,
        req.body.moisture,
        req.body.flower_temp,
        req.body.dirt_temp,
        req.body.sunlight,
        req.body.nitrogen_level,
        req.body.phosphor,
        req.body.potatisum,
      ]
    );

    res.json({ message: 'Flower added!' });
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

router.delete('/api/:userId/remove-flower/:flowerId', async (req, res) => {
  const userId = req.params.userId;
  const flowerId = req.params.userId;

  try {
    await pool.query(
      `DELETE FROM flowers WHERE user_id = $1 AND flower_id = $2;`,
      [userId, flowerId]
    );

    res.json({ message: `Flower with ID: ${flowerId} has been removed!` });
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

// Lägga till update flower
router.put('/api/:userId/update-flower/:flowerId', async (req, res) => {
  const userId = req.params.userId;
  const flowerId = req.params.flowerId;

  try {
    const result = await pool.query(
      `UPDATE flowers SET flower_name = $1 WHERE user_id = $2 AND flower_id = $3;`,
      [req.body.flower_name, userId, flowerId]
    );

    res.json({ message: `Flower with ID: ${flowerId} has been updated!` });
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

export default router;
