import express from 'express';
import { getBookings, createBooking, updateBookingStatus } from '../controllers/bookingController';

const router = express.Router();

router.get('/:userId', getBookings);
router.post('/', createBooking);
router.patch('/:id', updateBookingStatus);

export default router;
