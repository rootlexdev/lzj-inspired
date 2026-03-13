import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { CustomError } from "../errorUtils";

export const submitNewsletterSubscription = mutation({
    args: {
        email: v.string(),
    },
    handler: async (ctx, { email }) => {
        try {
            const existingSubscriber = await ctx.db
                .query("newsletterSubscribers")
                .filter(q => q.eq(q.field("email"), email))
                .first();

            if (existingSubscriber) {
                throw new CustomError(
                    "This email is already subscribed to the newsletter.",
                );
            }

            await ctx.db.insert("newsletterSubscribers", {
                email,
                subscribedAt: Date.now(),
            });

            return { status: true };
        } catch (err: unknown) {
            console.log("[ERR]:", err);
            return {
                status: false,
                error:
                    err instanceof Error
                        ? err.message
                        : "Failed to subscribe to the newsletter.",
            };
        }
    },
});
