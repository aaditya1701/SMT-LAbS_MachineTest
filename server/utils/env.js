import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: process.env.PORT,
    mongoURL: process.env.MONGODB_URL || process.env.MONGODB_URI,
    dbName: process.env.MONGO_DB_NAME || process.env.DBNAME,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
};

export default env;
