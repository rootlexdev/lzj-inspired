import { convexAuth } from "@convex-dev/auth/server";
import { ResendOTP } from "./lib/ResendOTP";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
    providers: [ResendOTP],
});
