import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../supabase/supabaseClient.js'; // Se till att du har rätt importväg

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Testar om servern är aktiv
 *     responses:
 *       200:
 *         description: Server is live
 */

router.get('/', (req, res) => {
  res.status(200).json('Server is live');
});

/**
 * @swagger
 * /api/get-users:
 *   get:
 *     summary: Hämta alla användare
 *     responses:
 *       200:
 *         description: Lyckad hämtning av användare
 */
router.get('/api/get-users', async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong with the database request' });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

/**
 * @swagger
 * /api/create-users:
 *   post:
 *     summary: Skapa en ny användare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Användare skapad
 */
router.post('/api/create-users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email, password: hashedPassword }]);

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong with the database request' });
    }

    res.json({
      message: `Added name: ${name} and email/password to the database`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Logga in användare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inloggning lyckades
 *       401:
 *         description: Ogiltig e-post eller lösenord
 */
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, data.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: data.user_id, name: data.name, email: data.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
