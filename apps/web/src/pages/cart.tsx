'use client';
import Link from 'next/link';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">🛒 Your Cart is Empty</h1>
          <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">🛒 Shopping Cart</h1>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            {items.map((item) => (
              <div key={item.productId} className="bg-white p-4 mb-4 rounded shadow flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded shadow h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{getTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>₹50</span>
              </div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>₹{getTotal() + 50}</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
