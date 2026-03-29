import { create } from 'zustand';

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'doctor' | 'groomer' | 'admin';
  avatar?: string;
  isVerified: boolean;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  
  setUser: (user) => set({ user, isLoggedIn: true }),
  
  setToken: (token) => set({ token }),
  
  logout: () => set({ user: null, token: null, isLoggedIn: false }),
}));
