import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth/minimal";
import authConfig from "./auth.config";
import {
    sendEmailVerification,
    sendOTPVerification,
    sendResetPassword,
} from "./email";
import { requireActionCtx } from "@convex-dev/better-auth/utils";
import { emailOTP } from "better-auth/plugins";

const siteUrl = process.env.SITE_URL!;

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
    return betterAuth({
        baseURL: siteUrl,
        database: authComponent.adapter(ctx),
        // Configure simple, non-verified email/password to get started
        emailAndPassword: {
            enabled: true,
            requireEmailVerification: true,
            sendResetPassword: async ({ user, url }) => {
                await sendResetPassword(requireActionCtx(ctx), {
                    to: user.email,
                    url,
                });
            },
        },
        emailVerification: {
            sendVerificationEmail: async ({ user, url }) => {
                await sendEmailVerification(requireActionCtx(ctx), {
                    to: user.email,
                    url,
                });
            },
        },
        plugins: [
            emailOTP({
                async sendVerificationOTP({ email, otp }) {
                    await sendOTPVerification(requireActionCtx(ctx), {
                        to: email,
                        code: otp,
                    });
                },
            }),
            // The Convex plugin is required for Convex compatibility
            convex({ authConfig }),
        ],
    });
};

export const { getAuthUser } = authComponent.clientApi();

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
    args: {},
    handler: async ctx => {
        return authComponent.getAuthUser(ctx);
    },
});
