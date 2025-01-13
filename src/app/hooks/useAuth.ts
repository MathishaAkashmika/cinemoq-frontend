"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '../config/api';
import {
  AuthResponse,
  LoginData,
  RegisterData,
  User,
  AuthError,
  AuthState,
  ApiResponse
} from '../types/auth';
import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
  setUser,
  getUser,
  isAuthenticated as checkIsAuthenticated,
  isTokenExpired,
  handleAuthSuccess as saveAuthData
} from '../utils/auth';

export const useAuth = () => {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const initializeAuth = () => {
      const token = getAuthToken();
      const user = getUser();

      if (token && !isTokenExpired(token) && user) {
        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } else {
        removeAuthToken();
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null
        });
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials: LoginData): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(API_ENDPOINTS.auth.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data: ApiResponse<AuthResponse> = await response.json();

      if (!response.ok || !('success' in data) || !data.success) {
        throw new Error((data as any).error?.message || 'Login failed');
      }

      saveAuthData(data.data);
      setState({
        user: data.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      router.push('/dashboard');
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: {
          message: error instanceof Error ? error.message : 'An error occurred during login'
        }
      }));
      throw error;
    }
  };

  const register = async (data: RegisterData): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(API_ENDPOINTS.auth.register, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result: ApiResponse<AuthResponse> = await response.json();

      if (!response.ok || !('success' in result) || !result.success) {
        throw new Error((result as any).error?.message || 'Registration failed');
      }

      saveAuthData(result.data);
      setState({
        user: result.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      router.push('/dashboard');
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: {
          message: error instanceof Error ? error.message : 'An error occurred during registration'
        }
      }));
      throw error;
    }
  };

  const logout = () => {
    removeAuthToken();
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    router.push('/login');
  };

  const updateUser = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData };
      setUser(updatedUser);
      setState(prev => ({
        ...prev,
        user: updatedUser
      }));
    }
  };

  const checkAuth = (): boolean => {
    const isAuth = checkIsAuthenticated();
    setState(prev => ({
      ...prev,
      isAuthenticated: isAuth,
      user: isAuth ? getUser() : null
    }));
    return isAuth;
  };

  return {
    ...state,
    login,
    register,
    logout,
    updateUser,
    checkAuth
  };
};

export default useAuth;