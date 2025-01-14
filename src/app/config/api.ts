import { AuthResponse, LoginData, RegisterData } from '../utils/auth';

// Movie Types
export interface Movie {
  _id: string;
  name: string;
  description: string;
  releaseDate: string;
  durationMinutes: number;
  rating: number;
  genre: string[];
  director: string;
  cast: string[];
  thumbnailImage: string;
  heroImage?: string;
  isHero?: boolean;
  price: number;
  categoryId: string;
  trailerUrl?: string;
  status: 'upcoming' | 'showing' | 'ended';
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface MovieListResponse {
  docs: Movie[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null | number;
  page: number;
  pagingCounter: number;
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
}

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
    list: `${API_BASE_URL}/movie`,
    detail: `${API_BASE_URL}/movie/:id`,
    search: `${API_BASE_URL}/movie/search`,
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

// Movie Sort Options
export type MovieSortField = 'title' | 'releaseDate' | 'rating' | 'price';
export type SortOrder = 'asc' | 'desc';

export interface MovieSortOptions {
  field: MovieSortField;
  order: SortOrder;
}

// Movie Query Parameters
export interface MovieQueryParams {
  page?: number;
  limit?: number;
  sort?: MovieSortOptions;
  search?: string;
  category?: string;
  status?: Movie['status'];
}

// Function to fetch movies with pagination and sorting
export async function fetchMovies(params: MovieQueryParams = {}): Promise<MovieListResponse> {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.limit) queryParams.append('limit', params.limit.toString());
    if (params.search) queryParams.append('search', params.search);
    if (params.category) queryParams.append('category', params.category);
    if (params.status) queryParams.append('status', params.status);
    if (params.sort) {
      queryParams.append('sortField', params.sort.field);
      queryParams.append('sortOrder', params.sort.order);
    }

    const url = `${API_ENDPOINTS.movies.list}?${queryParams.toString()}`;
    console.log('Fetching movies from:', url);

    const response = await fetch(url, {
      ...API_CONFIG,
      method: 'GET',
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error('Response not ok:', response.status, response.statusText);
      throw new Error(API_ERROR_MESSAGES.SERVER_ERROR);
    }

    const data = await response.json();
    console.log('Raw API response:', data);

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error(error instanceof Error ? error.message : API_ERROR_MESSAGES.NETWORK_ERROR);
  }
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