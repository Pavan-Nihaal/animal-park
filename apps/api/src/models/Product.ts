import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['dog', 'cat', 'bird', 'fish'], required: true },
    subcategory: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number },
    stock: { type: Number, default: 0 },
    images: [{ type: String }],
    brand: { type: String },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    sku: { type: String, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
