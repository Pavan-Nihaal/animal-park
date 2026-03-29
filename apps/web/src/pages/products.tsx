'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useApi } from '../hooks/useApi';

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  rating: number;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('');
  const { request, loading } = useApi();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category
          ? `/api/v1/products?category=${category}`
          : '/api/v1/products';
        const data = await request(url);
        setProducts(data.data || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [category, request]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">🛍️ Products</h1>
        
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setCategory('')}
            className={`px-4 py-2 rounded ${!category ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
          >
            All
          </button>
          {['dog', 'cat', 'bird', 'fish'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded capitalize ${category === cat ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.images[0] || '/placeholder.png'}
                rating={product.rating}
                category={product.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
