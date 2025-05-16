import express from 'express';
import dotenv from 'dotenv';
import swaggerDocs from './swagger.js';
import userRoutes from './routes/userRoutes.js';
import plantRoutes from './routes/PlantRoutes/index.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(userRoutes);
app.use(plantRoutes);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is live http://localhost:${PORT}/`);
  console.log(`Swagger docs documentation is available at http://localhost:${PORT}/api-docs`);
});
