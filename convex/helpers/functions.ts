import {
    customQuery,
    customMutation,
} from "convex-helpers/server/customFunctions";
import { mutation, query } from "../_generated/server";
import { authComponent } from "../auth";
import { Doc } from "../_generated/dataModel";
import { CustomError } from "../errorUtils";

export const protectedQuery = customQuery(query, {
    args: {},
    input: async (ctx, args) => {
        const user = await authComponent.getAuthUser(ctx);

        if (!user) {
            throw new Error("Unauthorized");
        }

        const profile = await ctx.db
            .query("staff")
            .withIndex("by_user_id", q => q.eq("userId", user._id))
            .unique();

        if (!profile) {
            throw new Error("User profile not found");
        }

        // We return the 'ctx' and 'args' specifically formatted for the helper
        return {
            ctx: {
                ...ctx,
                user,
                profile: profile as Doc<"staff">,
            },
            args,
        };
    },
});

// 2. Define the "Base" Mutation for actions that change data
export const protectedMutation = customMutation(mutation, {
    args: {},
    input: async (ctx, args) => {
        const user = await authComponent.getAuthUser(ctx);
        if (!user) throw new CustomError("Unauthorized");

        const profile = await ctx.db
            .query("staff")
            .withIndex("by_user_id", q => q.eq("userId", user._id))
            .unique();
        if (!profile) throw new CustomError("User profile not found");

        return { ctx: { ...ctx, user, profile }, args };
    },
});
