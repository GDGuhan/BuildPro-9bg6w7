import { User, UserRole } from '@/types';
import { mockUser } from './mockData';

const STORAGE_KEY = 'buildpro_user';

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Auto-login with mock user for demo
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
  return mockUser;
};

export const setUserRole = (role: UserRole): void => {
  const user = getCurrentUser();
  if (user) {
    user.role = role;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
};

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
