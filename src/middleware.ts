import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./server/AuthServer";

// auth
const authRouter = ["/login", "/register"];
// role base routing
const roleBaneAccess = {
  user: [/^\user/],
  admin: [/^\admin/],
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
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/create-shop"],
};
