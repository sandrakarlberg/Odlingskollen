import express from 'express';

const app = express();
const router = 3000;

// Middleware för konvertera till json data
app.use(express.json());

let databaseFlowers = [];

//
app.get('/', (req, res) => {
  res.json('Server is live');
});

// Hämta flower databas
app.get('/api/get-flowers', (req, res) => {
  res.json(databaseFlowers);
});

// Start server
app.listen(router, () => {
  console.log(`Server is live http://localhost:${router}/`);
});
