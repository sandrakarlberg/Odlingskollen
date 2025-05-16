import express from 'express';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js';

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/{userId}/add-flower:
 *   post:
 *     summary: Lägg till en blomma för en användare
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               flower_name:
 *                 type: string
 *               last_watered:
 *                 type: string
 *               watering_interval:
 *                 type: number
 *               moisture:
 *                 type: number
 *               flower_temp:
 *                 type: number
 *               dirt_temp:
 *                 type: number
 *               sunlight:
 *                 type: number
 *               nitrogen_level:
 *                 type: number
 *               phosphor:
 *                 type: number
 *               potassium:
 *                 type: number
 *     responses:
 *       200:
 *         description: Blomma tillagd
 */
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
    potassium: req.body.potassium,
  };

  try {
    const { error } = await supabase.from('flowers').insert([flower]);

    if (error) {
      const err = new Error('Supabase query failed');
      err.status = 500; 
      return next(err);
    }

    res.json({ message: 'Flower added!' });
  } catch (error) {
    next(error);
  }
});

export default router;