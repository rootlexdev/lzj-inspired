import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const { pathname } = new URL(request.url);
    const sessionCookie = getSessionCookie(request);

    // 1. Define your protected routes
    if (pathname.startsWith("/secure-area")) {
        // 2. Optimistic check: if no session cookie, they aren't logged in
        if (!sessionCookie) {
            // Redirect to login and include the current URL as a 'callbackUrl'
            const loginUrl = new URL("/auth", request.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }

        // ▸ Otherwise, always kick them to the homepage:
        return NextResponse.next();
    }

    // Everything else sails through
    return NextResponse.next();
}

export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
