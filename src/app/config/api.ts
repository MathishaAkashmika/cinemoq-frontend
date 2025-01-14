import { AuthResponse, LoginData, RegisterData } from '../utils/auth';

// Movie Types
export interface Movie {
  _id: string;
  title: string;
  description: string;
  releaseDate: string;
  duration: number;
  rating: number;
  genre: string[];
  director: string;
  cast: string[];
  posterUrl: string | null;
  trailerUrl?: string;
  status: 'upcoming' | 'showing' | 'ended';
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface MovieListResponse extends ApiResponse<{
  movies: Movie[];
  pagination: PaginationMeta;
}> {}

export interface MovieDetailResponse extends ApiResponse<Movie> {}

// Category Type
export interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// API Base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/v1';

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/signup`,
    logout: `${API_BASE_URL}/auth/logout`,
    refreshToken: `${API_BASE_URL}/auth/refresh-token`,
  },
  user: {
    profile: `${API_BASE_URL}/user/profile`,
    updateProfile: `${API_BASE_URL}/user/profile/update`,
  },
  careers: `${API_BASE_URL}/careers`,
  categories: `${API_BASE_URL}/categories`,
  movies: {
    list: `${API_BASE_URL}/movies`,
    detail: `${API_BASE_URL}/movies/:id`,
    poster: `${API_BASE_URL}/movies/:id/poster`,
  },
} as const;

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface LoginResponse extends ApiResponse<AuthResponse> {}
export interface RegisterResponse extends ApiResponse<AuthResponse> {}

// API Configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  mode: 'cors' as const,
};

// API Request Options Types
export interface ApiRequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

// Default request timeout (in milliseconds)
export const DEFAULT_TIMEOUT = 30000;

// Error messages
export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  UNAUTHORIZED: 'Unauthorized access. Please login again.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
} as const;