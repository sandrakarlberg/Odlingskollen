import express from 'express';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js';

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/{userId}/get-flowers:
 *   get:
 *     summary: Hämta alla blommor för en användare
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lyckad hämtning av blommor
 */
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
      const err = new Error('Supabase query failed');
      err.status = 500;
      return next(err);
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;