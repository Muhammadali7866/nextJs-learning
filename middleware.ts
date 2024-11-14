import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePrefernece = request.cookies.get("theme");
  if (!themePrefernece) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;

  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/about", request.url));
  //   }
}

// export const config = {
//   matcher: "/profile",
// };
