'use client';
import Image from 'next/image';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  category,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      productId: id,
      name,
      price,
      quantity: 1,
      image,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {category}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">₹{price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
