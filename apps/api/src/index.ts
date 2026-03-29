import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config({ path: '../../.env.local' });

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/animal-park');
    console.log('✓ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

connectDB();

// Health check
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', message: '🐾 Animal Park API is running!' });
});

// API Routes
app.use('/api/v1', routes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: '🐾 Welcome to Animal Park API' });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Health check: http://localhost:${PORT}/api/v1/health`);
  console.log(`✓ API Base: http://localhost:${PORT}/api/v1\n`);
});

export default app;
