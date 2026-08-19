import mongoose from "mongoose";
import { env } from "./env.js";

const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
    dbName: env.dbName,
};

export default async function connectDb() {
    try {
        await mongoose.connect(env.mongoURL, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(`MongoDB connected successfully: ${mongoose.connection.name}`);
    } catch (err) {
        console.error("MongoDB connection failed:");
        throw err;
    }
}
