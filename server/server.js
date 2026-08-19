import express from 'express';
import env from './utils/env.js';
import connectDb from './utils/db.js'; './utils/db.js';
import userRoutes from './routes/UserRoute.js';
import mongoose, { connect } from 'mongoose';


connectDb();

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const startServer = async () => {
//   await connectDB();
  app.listen(env.port, () => {
    console.log(`Server is running on port ${env.port}`);
  });
};

startServer();
