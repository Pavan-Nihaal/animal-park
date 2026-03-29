import express from 'express';
import authRoutes from './authRoutes';
import productRoutes from './productRoutes';
import doctorRoutes from './doctorRoutes';
import orderRoutes from './orderRoutes';
import bookingRoutes from './bookingRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/doctors', doctorRoutes);
router.use('/orders', orderRoutes);
router.use('/bookings', bookingRoutes);

export default router;
