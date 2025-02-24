import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./server/AuthServer";
type TRole = keyof typeof roleBaneAccess;
// auth
const authRouter = ["/login", "/register"];
// role base routing
const roleBaneAccess = {
  user: [/^\/user/, /^\/create-shop/], // Matches "/users", "/users/profile", etc.
  admin: [/^\/admin/], // Matches "/admin", "/admin/dashboard", etc.
};

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();
  if (!user) {
    if (authRouter.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (user?.role && roleBaneAccess[user.role as TRole]) {
    const routers = roleBaneAccess[user.role as TRole];
    if (routers.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/create-shop", "/admin", "/admin/:page", "/user/:page", "/user"],
};
