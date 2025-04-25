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

// Hämta användarens flower databas
app.get('/api/:userId/get-flowers', (req, res) => {
  const userFind = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  res.status(200).json(userFind.flowers);
});

// Lägg till blommor
app.post('/api/:userId/add-flower', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'No name request.' });
    return;
  }

  const userFind = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  const flowers = {
    id: Date.now(),
    name: req.body.name,
    // specie: req.body.specie, // Nycklar som kanske bör finnas i databasen
    // moisture: req.body.moisture,
    // temperature: req.body.temperature,
    // humidity: req.body.humidity,
  };

  userFind.flowers.push(flowers);
  res.json(userFind);
});

// Ta bort blommor
app.delete('/api/:userId/remove-flower/:flowerId', (req, res) => {
  const userFind = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  const index = userFind.flowers.findIndex(
    (flower) => flower.flowerId === parseInt(req.params.flowerId)
  );

  if (index === -1) return res.status(404).json({ error: 'Flower not found' });

  userFind.flowers.splice(index, 1);
  res.json({ message: 'Flower deleted' });
});

// Updatera blommor
app.put('/api/:userId/update-flower/:flowerId', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'No name request.' });
    return;
  }
  const userFind = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  const flower = userFind.flowers.find(
    (f) => f.flowerId === parseInt(req.params.flowerId)
  );

  if (!flower) return res.status(404).json({ error: 'Flower not found' });

  flower.name = req.body.name;

  res.json(userFind.flowers);
});

// User del---------------------------------------------
/* Users api endpoints */

let users = [
  {
    userId: 1,
    name: 'Adam',
    password: 'potatis',
    flowers: [
      {
        flowerId: 1,
        name: 'Smörblomma',
      },
      {
        flowerId: 2,
        name: 'Ros',
      },
      {
        flowerId: 3,
        name: 'Tulpan',
      },
    ],
  },
];

// Hämta alla users
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
