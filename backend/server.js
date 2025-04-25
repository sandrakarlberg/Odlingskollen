import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware för konvertera till json data
app.use(express.json());

let databaseFlowers = [];

// Test endpoint för server debugging
app.get('/', (req, res) => {
  res.status(200).json('Server is live');
});

// Hämta flower databas
app.get('/api/get-flowers', (req, res) => {
  res.status(200).json(databaseFlowers);
});

// Lägg till blommor
app.post('/api/add-flowers', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'No name request.' });
    return;
  }

  const flowers = {
    id: Date.now(),
    name: req.body.name,
    // specie: req.body.specie, // Nycklar som kanske bör finnas i databasen
    // moisture: req.body.moisture,
    // temperature: req.body.temperature,
    // humidity: req.body.humidity,
  };

  databaseFlowers.push(flowers);
  res.json(databaseFlowers);
});

// Ta bort blommor
app.delete('/api/remove-flower/:id', (req, res) => {
  const index = databaseFlowers.findIndex(
    (flower) => flower.id === parseInt(req.params.id)
  );

  if (index === -1) return res.status(404).json({ error: 'Flower not found' });

  databaseFlowers.splice(index, 1);
  res.json({ message: 'Flower deleted' });
});

// Updatera blommor
app.put('/api/update-flower/:id', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'No name request.' });
    return;
  }

  const flower = databaseFlowers.find((f) => f.id === parseInt(req.params.id));

  if (!flower) return res.status(404).json({ error: 'Flower not found' });

  flower.name = req.body.name;

  res.json(databaseFlowers);
});

/* Users api endpoints */

let users = [
  { userId: 1, name: 'Bob', password: '123' },
  { userId: 2, name: 'Jonas', password: 'hejsan' },
  { userId: 3, name: 'Adam', password: 'potatis' },
];

// Hämta users
app.get('/api/get-users', (req, res) => {
  res.status(200).json(users);
});

// Skapa användare
app.post('/api/create-user/', (req, res) => {
  if (!req.body.name && !req.body.password) {
    res.status(400).json({ error: 'No name request.' });
    return;
  }

  const user = {
    userId: Date.now(),
    name: req.body.name,
    password: req.body.password,
  };

  users.push(user);
  res.json(users);
});

app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  if (name !== users.name) {
    return res.status(401).json({ message: 'Invalid user name' });
  }

  // No authentication yet
  if (password !== users.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
});
