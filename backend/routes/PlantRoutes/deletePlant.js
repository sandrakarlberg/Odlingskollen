import express from 'express';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js';

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/{userId}/remove-flower/{flowerId}:
 *   delete:
 *     summary: Ta bort en blomma
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
 *     responses:
 *       200:
 *         description: Blomma borttagen
 */
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
      const err = new Error('Supabase query failed');
      err.status = 500;
      return next(err);
    }

    res.json({ message: `Flower with ID ${flowerId} has been removed!` });
  } catch (error) {
    next(error);
  }
});

export default router;