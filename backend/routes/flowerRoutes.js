import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js';

dotenv.config();

const router = express.Router();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// --- Routes ---

router.get('/api/:userId/get-flowers', async (req, res) => {
  const userId = req.params.userId;

  try {
    const { data, error } = await supabase
      .from('flowers')
      .select(
        `
        flower_id,
        flower_name,
        last_watered,
        moisture,
        sunlight,
        users:user_id (
          user_id,
          name
        )
      `
      )
      .eq('user_id', userId);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Supabase query failed' });
    }

    res.json(data);
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/api/:userId/add-flower', async (req, res) => {
  const userId = req.params.userId;

  const flower = {
    user_id: userId,
    flower_name: req.body.flower_name,
    last_watered: req.body.last_watered,
    watering_interval: req.body.watering_interval,
    moisture: req.body.moisture,
    flower_temp: req.body.flower_temp,
    dirt_temp: req.body.dirt_temp,
    sunlight: req.body.sunlight,
    nitrogen_level: req.body.nitrogen_level,
    phosphor: req.body.phosphor,
    potatisum: req.body.potatisum,
  };

  try {
    const { error } = await supabase.from('flowers').insert([flower]);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to insert flower' });
    }

    res.json({ message: 'Flower added!' });
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/api/:userId/remove-flower/:flowerId', async (req, res) => {
  const flowerId = req.params.flowerId;
  const userId = req.params.userId;

  try {
    const { error } = await supabase
      .from('flowers')
      .delete()
      .eq('flower_id', flowerId)
      .eq('user_id', userId);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete flower' });
    }

    res.json({ message: `Flower with ID ${flowerId} has been removed!` });
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Lägga till update flower
router.put('/api/:userId/update-flower/:flowerId', async (req, res) => {
  const flowerId = req.params.flowerId;
  const userId = req.params.userId;

  try {
    const { error } = await supabase
      .from('flowers')
      .update({ flower_name: req.body.flower_name })
      .eq('flower_id', flowerId)
      .eq('user_id', userId);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update flower' });
    }

    res.json({ message: `Flower with ID ${flowerId} has been updated!` });
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
