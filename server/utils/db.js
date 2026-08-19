import mongoose from 'mongoose';
import env from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URL, {
      dbName: env.DBNAME
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
export default connectDB;