import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const DBNAME = process.env.DBNAME;
const env = { PORT, MONGODB_URL, DBNAME };

export default env;
