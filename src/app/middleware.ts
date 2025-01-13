import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isTokenExpired } from './utils/auth';

// Define public routes that don't require authentication
const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/',
  '/movies',
  '/about'
];

// Check if the current route is public
const isPublicRoute = (path: string) => {
  return publicRoutes.some(route => path.startsWith(route));
};

// Middleware function to handle authentication
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Allow access to public routes without authentication
  if (isPublicRoute(path)) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = request.cookies.get('cinemoq_auth_token')?.value;

  // If no token is present, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  // Check if token is expired
  if (isTokenExpired(token)) {
    // Clear the invalid token
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('cinemoq_auth_token');
    return response;
  }

  // Token is valid, allow access to protected route
  return NextResponse.next();
}

// Configure middleware matching
export const config = {
  // Match all routes except public assets and api routes
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};