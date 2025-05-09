import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import flowerRoutes from './routes/flowerRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(userRoutes);
app.use(flowerRoutes);

// // Users login
// app.post('/api/login', (req, res) => {
//   const { name, password } = req.body;

//   if (name !== users.name) {
//     return res.status(401).json({ message: 'Invalid user name' });
//   }

//   if (password !== users.password) {
//     return res.status(401).json({ message: 'Invalid password' });
//   }

//   res.json({ message: 'Login successful' });
// });

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

// // Temporär databas users
// let users = [
//   // {
//   //   userId: 1,
//   //   name: 'Adam',
//   //   password: 'potatis',
//   //   flowers: [
//   //     {
//   //       flowerId: 1,
//   //       flowerName: 'Smörblomma',
//   //       lastWatered: '2023-03-01',
//   //       wateringInterval: 3,
//   //       moisture: 2,
//   //       flowerTemp: 15,
//   //       dirtTemp: 15,
//   //       sunlight: 33,
//   //       nitrogenLevel: 33,
//   //       phosphor: 12,
//   //       potatisum: 11,
//   //     },
//   //     {
//   //       flowerId: 2,
//   //       flowerName: 'Ros',
//   //       lastWatered: '2023-03-02',
//   //       wateringInterval: 2,
//   //       moisture: 2,
//   //       flowerTemp: 15,
//   //       dirtTemp: 15,
//   //       sunlight: 33,
//   //       nitrogenLevel: 33,
//   //       phosphor: 12,
//   //       potatisum: 11,
//   //     },
//   //     {
//   //       flowerId: 3,
//   //       flowerName: 'Tulpan',
//   //       lastWatered: '2023-03-03',
//   //       wateringInterval: 5,
//   //       moisture: 2,
//   //       flowerTemp: 15,
//   //       dirtTemp: 15,
//   //       sunlight: 33,
//   //       nitrogenLevel: 33,
//   //       phosphor: 12,
//   //       potatisum: 11,
//   //     },
//   //   ],
//   // },
// ];

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
});
