import { Request, Response } from 'express';
import { Booking } from '../models/Booking';

export const getBookings = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId }).populate('doctorId');
    res.json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings', error });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, data: booking, message: 'Booking created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create booking', error });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    res.json({ success: true, data: booking, message: 'Booking updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update booking', error });
  }
};
