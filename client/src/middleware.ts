import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Configuración básica de middleware sin next-intl
  const pathname = request.nextUrl.pathname;
  
  // Redirigir la raíz a /es
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\..*).*)']  
};