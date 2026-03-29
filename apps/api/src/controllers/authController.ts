import { Request, Response } from 'express';
import { User } from '../models/User';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({
      success: true,
      data: { user, accessToken: 'token' },
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Registration failed', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({
      success: true,
      data: { user, accessToken: 'token' },
      message: 'Login successful',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed', error });
  }
};
