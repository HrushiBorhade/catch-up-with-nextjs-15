import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = false;

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/signup", request.url));
}

export const config = {
  matcher: ["/blog/:slug*"]
};