import express from 'express';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js';

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/{userId}/update-flower/{flowerId}:
 *   put:
 *     summary: Uppdatera en blommas namn
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: flowerId
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
 *     responses:
 *       200:
 *         description: Blomma uppdaterad
 */
router.put('/api/:userId/update-flower/:flowerId', async (req, res) => {
  const flowerId = req.params.flowerId;
  const userId = req.params.userId;

  if (!flower_name || flower_name.trim() === '') {
    return res.status(400).json({ error: 'Flower name is required' });
  }

  try {
    const { error } = await supabase
      .from('flowers')
      .update({ flower_name: req.body.flower_name })
      .eq('flower_id', flowerId)
      .eq('user_id', userId);



    if (error) {
      const err = new Error('Supabase query failed');
      err.status = 500;
      return next(err);
    }

    res.status(200).json({ message: `Flower with ID ${flowerId} has been updated!` });
  } catch (error) {
    next(error);
  }
});

export default router;