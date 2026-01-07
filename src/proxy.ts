import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const res = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    res.cookies.set("theme", "dark");
  }

  res.headers.set("custom", "custom-v");
  return res;
}

// export const config = {
// return NextResponse.redirect(new URL("/", request.url));
//   matcher: ["/about", "/api/:path*", "/comments/:path*"],
// };
