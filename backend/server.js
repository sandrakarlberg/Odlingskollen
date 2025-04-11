import express from 'express';

const app = express();
const router = 3000;

// Middleware för konvertera till json data
app.use(express.json());

app.listen(router, () => {
  console.log(`Server is live http://localhost:${router}/`);
});
