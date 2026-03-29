'use client';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { useCartStore } from '../store/cartStore';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🐾 Animal Park
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/doctors" className="hover:text-blue-600">Doctors</Link>
          <Link href="/cart" className="relative hover:text-blue-600">
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-600">{user?.name}</Link>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-600">Login</Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
