// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REDIR_PATH = "redir";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(`request`, request);

  if (request.nextUrl.pathname.includes(REDIR_PATH)) {
    return NextResponse.redirect(new URL("/about", request.url));
  }
}
