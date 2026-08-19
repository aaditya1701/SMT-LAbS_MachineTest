import jwt from 'jsonwebtoken';
import env from '../utils/env.js';

const authenticate = (req, res, next) => {
  const [scheme, token] = (req.headers.authorization || '').split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'A Bearer token is required' });
  }

  try {
    req.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authenticate;
