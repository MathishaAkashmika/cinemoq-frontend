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
  token: string;
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

export interface AuthError {
  message: string;
  code?: string;
  field?: string;
}

export type ValidationError = {
  [key: string]: string[];
};

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: AuthError | null;
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: AuthError;
  validationErrors?: ValidationError;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;