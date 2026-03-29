import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import axiosInstance from '../lib/axios';

export const useAuth = () => {
  const { user, token, setUser, setToken, logout } = useAuthStore();

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/auth/login/email', {
        email,
        password,
      });
      const { user, accessToken } = response.data.data;
      setUser(user);
      setToken(accessToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    try {
      const response = await axiosInstance.post('/auth/register/email', {
        name,
        email,
        password,
        role,
      });
      const { user, accessToken } = response.data.data;
      setUser(user);
      setToken(accessToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    token,
    isLoggedIn: !!token,
    login,
    register,
    logout,
  };
};
