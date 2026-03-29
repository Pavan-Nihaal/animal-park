import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    bookingDate: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    petName: { type: String, required: true },
    petType: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);
