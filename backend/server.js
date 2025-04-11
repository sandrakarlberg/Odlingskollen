import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware för konvertera till json data
app.use(express.json());

let databaseFlowers = [];

// Test endpoint för server debugging
app.get('/', (req, res) => {
  res.json('Server is live');
});

// Hämta flower databas
app.get('/api/get-flowers', (req, res) => {
  res.json(databaseFlowers);
});

// Lägg till blommor
app.post('/api/add-flowers', (req, res) => {
  if (!req.body.name) {
    res.status(404).json({ error: 'No name request.' });
    return;
  }

  const flowers = {
    id: Date.now(),
    name: req.body.name,
    // specie: req.body.specie,
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

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
});
