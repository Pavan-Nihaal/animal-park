import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, enum: ['general_veterinary', 'surgery', 'dentistry', 'dermatology', 'orthopedics'], required: true },
    experience: { type: Number, required: true },
    bio: { type: String },
    basePrice: { type: Number, required: true },
    city: { type: String, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    isApproved: { type: Boolean, default: false },
    availability: [{ type: String }],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
