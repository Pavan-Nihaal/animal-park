import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env.local' });

export const connectDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/animal-park';
    await mongoose.connect(mongoUri);
    console.log('✓ MongoDB connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
};

export const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('✓ MongoDB disconnected');
  } catch (error) {
    console.error('❌ MongoDB disconnection error:', error);
    throw error;
  }
};
