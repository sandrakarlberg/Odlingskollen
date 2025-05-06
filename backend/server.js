import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware för konvertera till json data
app.use(express.json());

// Test endpoint för server debugging
app.get('/', (req, res) => {
  res.status(200).json('Server is live');
});

// --- Users hantering ---

// Hämta användare
app.get('/api/get-users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
  }
});

// Skapa användare
app.post('/api/create-users', async (req, res) => {
  try {
    await pool.query('INSERT INTO users (name, password) VALUES ($1 , $2)', [
      req.body.name,
      req.body.email,
    ]);
    res.json({
      message: `Added ${req.body.name} ${req.body.email} to database `,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
  }
});

// Users login
app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  if (name !== users.name) {
    return res.status(401).json({ message: 'Invalid user name' });
  }

  if (password !== users.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});

// --- Flower-hantering ---

// Hämta användarens flower databas, funkar?
app.get('/api/:userId/get-flowers', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query(
      `SELECT 
        users.user_id, 
        users.name, 
        flowers.flower_id, 
        flowers.flower_name, 
        flowers.last_watered, 
        flowers.moisture, 
        flowers.sunlight
      FROM users
      JOIN flowers ON users.user_id = flowers.user_id
      WHERE users.user_id = $1;`,
      [userId]
    );

    res.json(result.rows); // skicka tillbaka blommorna
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
  }
});

// Lägg till blommor

// Lägg till blommor
app.post('/api/:userId/add-flower', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query(
      `INSERT INTO flowers (
  user_id, flower_name, last_watered, watering_interval, moisture,
  flower_temp, dirt_temp, sunlight, nitrogen_level, phosphor, potatisum
) VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
`,
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

    res.json(result.rows); // skicka tillbaka blommorna
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
  }
});

// Ta bort blommor
app.delete('/api/:userId/remove-flower/:flowerId', async (req, res) => {
  const userId = req.params.userId;
  const flowerId = req.params.flowerId;

  try {
    await pool.query(
      `DELETE FROM flowers WHERE user_id = $1 AND flower_id = $2;`,
      [userId, flowerId]
    );
    res.json({ message: 'Tog bort blomma' }); // skicka tillbaka blommorna
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
  }
});

// Updatera blommor
app.put('/api/:userId/update-flower/:flowerId', (req, res) => {
  if (!req.body.flowerName) {
    res.status(400).json({ error: 'No flower name provided.' });
    return;
  }
  const userFind = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  const flower = userFind.flowers.find(
    (f) => f.flowerId === parseInt(req.params.flowerId)
  );

  if (!flower) return res.status(404).json({ error: 'Flower not found' });

  flower.flowerName = req.body.flowerName;

  res.json(userFind.flowers);
});

// Temporär databas users
let users = [
  // {
  //   userId: 1,
  //   name: 'Adam',
  //   password: 'potatis',
  //   flowers: [
  //     {
  //       flowerId: 1,
  //       flowerName: 'Smörblomma',
  //       lastWatered: '2023-03-01',
  //       wateringInterval: 3,
  //       moisture: 2,
  //       flowerTemp: 15,
  //       dirtTemp: 15,
  //       sunlight: 33,
  //       nitrogenLevel: 33,
  //       phosphor: 12,
  //       potatisum: 11,
  //     },
  //     {
  //       flowerId: 2,
  //       flowerName: 'Ros',
  //       lastWatered: '2023-03-02',
  //       wateringInterval: 2,
  //       moisture: 2,
  //       flowerTemp: 15,
  //       dirtTemp: 15,
  //       sunlight: 33,
  //       nitrogenLevel: 33,
  //       phosphor: 12,
  //       potatisum: 11,
  //     },
  //     {
  //       flowerId: 3,
  //       flowerName: 'Tulpan',
  //       lastWatered: '2023-03-03',
  //       wateringInterval: 5,
  //       moisture: 2,
  //       flowerTemp: 15,
  //       dirtTemp: 15,
  //       sunlight: 33,
  //       nitrogenLevel: 33,
  //       phosphor: 12,
  //       potatisum: 11,
  //     },
  //   ],
  // },
];

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
});
