import express from 'express';
import dotenv from 'dotenv';
import supabase from '../supabase/supabaseClient.js'; // Se till att du har rätt importväg

dotenv.config();

const router = express.Router();

// --- Routes ---

// Server test
router.get('/', (req, res) => {
  res.status(200).json('Server is live');
});

router.get('/api/get-users', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users') // Hämta data från "users"-tabellen
      .select('*'); // Välj alla kolumner

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong with the database request' });
    }

    res.json(data); // Skicka tillbaka användardatan
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Something went wrong with the database request' });
  }
});

router.post('/api/create-users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data, error } = await supabase
      .from('users') // Ange tabellen som du vill sätta in data i
      .insert([{ name, email, password }]); // Skicka med objektet för att skapa en ny användare

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

// Login endpoint - måste implementeras
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password) // Jämför både email och lösenord
      .single(); // Vi förväntar oss endast en användare

    if (error || !data) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
