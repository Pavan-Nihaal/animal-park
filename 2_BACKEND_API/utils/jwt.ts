import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || '';

export const signAccessToken = (payload: Record<string, any>) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
};

export const signRefreshToken = (payload: Record<string, any>) => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string) => jwt.verify(token, JWT_SECRET);
export const verifyRefreshToken = (token: string) => jwt.verify(token, JWT_REFRESH_SECRET);
