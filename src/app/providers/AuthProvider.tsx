'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  AuthState,
  User,
  AuthError,
  LoginData,
  RegisterData,
  AuthResponse,
  ApiResponse
} from '../types/auth';
import {
  getAuthToken,
  getUser,
  handleAuthSuccess,
  handleLogout as utilsHandleLogout,
  isAuthenticated as checkIsAuthenticated
} from '../utils/auth';

interface AuthContextType extends AuthState {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  clearError: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialState);
  const router = useRouter();

  const updateState = useCallback((updates: Partial<AuthState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const clearError = useCallback(() => {
    updateState({ error: null });
  }, [updateState]);

  const handleAuthError = useCallback((error: AuthError) => {
    updateState({
      error,
      isLoading: false,
      isAuthenticated: false
    });
  }, [updateState]);

  const login = useCallback(async (data: LoginData) => {
    try {
      updateState({ isLoading: true, error: null });
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result: ApiResponse<AuthResponse> = await response.json();

      if (!result.success) {
        handleAuthError(result.error);
        return;
      }

      handleAuthSuccess(result.data);
      updateState({
        user: result.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      router.push('/dashboard');
    } catch (error) {
      handleAuthError({
        message: 'An unexpected error occurred during login.'
      });
    }
  }, [updateState, handleAuthError, router]);

  const register = useCallback(async (data: RegisterData) => {
    try {
      updateState({ isLoading: true, error: null });

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result: ApiResponse<AuthResponse> = await response.json();

      if (!result.success) {
        handleAuthError(result.error);
        return;
      }

      handleAuthSuccess(result.data);
      updateState({
        user: result.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      router.push('/dashboard');
    } catch (error) {
      handleAuthError({
        message: 'An unexpected error occurred during registration.'
      });
    }
  }, [updateState, handleAuthError, router]);

  const logout = useCallback(() => {
    utilsHandleLogout();
    updateState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    router.push('/Login');
  }, [updateState, router]);

  useEffect(() => {
    const initializeAuth = () => {
      const token = getAuthToken();
      const user = getUser();
      const isAuthenticated = checkIsAuthenticated();

      updateState({
        user: user,
        isAuthenticated: isAuthenticated,
        isLoading: false
      });

      if (!isAuthenticated && token) {
        logout();
      }
    };

    initializeAuth();
  }, [updateState, logout]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};