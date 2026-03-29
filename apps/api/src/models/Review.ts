import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export const Review = mongoose.model('Review', reviewSchema);
