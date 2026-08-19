import express from 'express';
import userService from '../service/userService.js';
import authenticate from '../middleware/authMiddleware.js';

const app = express.Router();

app.post('/registerUser', async (req, res) => {
 try {
    const user = await userService.registerUser(req.body);
    const token = userService.createToken(user);
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
 } catch (error) {
    console.error('Error registering user:', error);
    res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { user, token } = await userService.loginUser(req.body);
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });
  }
});

app.get('/me', authenticate, async (req, res) => {
  const user = await userService.getUserById(req.user.sub);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ user });
});



export default app;
