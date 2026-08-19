import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../utils/env.js";

const registerUser = async (userData) => {
    const { name, age, dateOfBirth, email, password } = userData;
    const normalizedEmail = email?.toLowerCase().trim();

    if (!name || !normalizedEmail || !password) {
        const error = new Error("Name, email, and password are required");
        error.statusCode = 400;
        throw error;
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
        const error = new Error("An account with this email already exists");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        name,
        age,
        dateOfBirth,
        email: normalizedEmail,
        password: hashedPassword
    });

    return user;
};

const createToken = (user) => {
    if (!env.jwtSecret) {
        throw new Error("JWT_SECRET is not configured");
    }

    return jwt.sign(
        { email: user.email },
        env.jwtSecret,
        { subject: user._id.toString(), expiresIn: env.jwtExpiresIn }
    );
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email: email?.toLowerCase().trim() });
    if (!user || !password || !(await bcrypt.compare(password, user.password))) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    return { user, token: createToken(user) };
};

const getUserById = async (userId) => User.findById(userId).select('-password');


export default {
    registerUser,
    loginUser,
    createToken,
    getUserById
};
