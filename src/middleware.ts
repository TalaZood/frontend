import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isFirstRun = !!request.cookies.get("isFirstRun");

  if (isFirstRun) {
    const response = NextResponse.redirect(new URL("/onboarding", request.url));
    response.cookies.set("isFirstRun", "false");

    return response;
  }

  return NextResponse.next();
}

export const config = { matcher: "/:path*" };
