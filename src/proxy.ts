import {
    isAuthenticatedNextjs,
    nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/secure-area")) {
        // ▸ If you still want to block only when unauthenticated, uncomment:
        const isAuthenticated = await isAuthenticatedNextjs();
        if (!isAuthenticated) {
            return nextjsMiddlewareRedirect(request, "/auth");
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
