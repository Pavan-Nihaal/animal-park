import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      autoIndex: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000,
    });
    console.log('✓ MongoDB connected');
  } catch (error) {
    console.error('MongoDB Error:', error);
    process.exit(1);
  }
};
