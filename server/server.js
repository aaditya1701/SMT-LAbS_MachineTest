import express from 'express';
import env from './utils/env.js';
import connectDb from './utils/db.js';
import userRoutes from './routes/UserRoute.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const startServer = async () => {
  await connectDb();
  app.listen(env.port, () => {
    console.log(`Server is running on port ${env.port}`);
  });
};

startServer().catch((error) => {
  console.error('Unable to start server:', error.message);
  process.exit(1);
});
