// Types and interfaces
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  address?: string;
  profileImage?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  firstName: string;
  lastName: string;
  gender?: string;
  address?: string;
  profileImage?: string;
}

// Token management
const TOKEN_KEY = 'cinemoq_auth_token';
const USER_KEY = 'cinemoq_user';

export const setAuthToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const removeAuthToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// User data management
export const setUser = (user: User): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
};

// Authentication status
export const isAuthenticated = (): boolean => {
  const token = getAuthToken();
  return !!token && !isTokenExpired(token);
};

// Token validation
export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp) {
      return payload.exp * 1000 < Date.now();
    }
    return false;
  } catch {
    return true;
  }
};

// Auth headers
export const getAuthHeaders = (): HeadersInit => {
  const token = getAuthToken();
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

// Auth state management
export const handleAuthSuccess = (response: AuthResponse): void => {
  setAuthToken(response.access_token);
  setUser(response.user);
};

export const handleLogout = (): void => {
  removeAuthToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
};