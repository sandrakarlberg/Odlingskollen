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

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
});
