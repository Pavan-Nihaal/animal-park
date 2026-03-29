import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout } = useAuthStore();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/v1/auth/login/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      if (data.success) {
        setUser(data.data.user);
        localStorage.setItem('accessToken', data.data.accessToken);
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    try {
      const response = await fetch('/api/v1/auth/register/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });
      
      const data = await response.json();
      if (data.success) {
        setUser(data.data.user);
        localStorage.setItem('accessToken', data.data.accessToken);
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: 'Registration failed' };
    }
  };

  return { user, isAuthenticated, login, register, logout };
};
