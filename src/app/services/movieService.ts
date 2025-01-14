import { getAuthHeaders } from '../utils/auth';

export interface Movie {
  id?: string;
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  duration: number;
  rating?: number;
  posterUrl?: string;
}

export interface MovieResponse {
  success: boolean;
  data: Movie | Movie[];
  message?: string;
}

const API_BASE_URL = 'http://localhost:8080/v1';

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: MovieResponse = await response.json();
    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const addMovie = async (movie: Omit<Movie, 'id'>): Promise<Movie> => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: MovieResponse = await response.json();
    if (!result.success || !result.data) {
      throw new Error(result.message || 'Failed to add movie');
    }

    return result.data as Movie;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw error;
  }
};