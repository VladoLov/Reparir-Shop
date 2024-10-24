import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    /* console.log(request); */
  },
  { isReturnToCurrentPage: true }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
  ],
};
