import { v } from "convex/values";
import { query } from "../_generated/server";
import { getAuthUserId } from "../auth";

export const getStaffAccountDetails = query({
    args: {
        staffId: v.id("staffSubmissions"),
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const accountDetails = await ctx.db
            .query("staffAccountDetails")
            .withIndex("by_staff_id", q =>
                q.eq("staffSubmissionId", args.staffId)
            )
            .unique();

        if (!accountDetails) return null;

        return accountDetails;
    },
});

export const getStaffNextOfKinDetails = query({
    args: {
        staffId: v.id("staffSubmissions"),
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const nextOfKinDetails = await ctx.db
            .query("staffNextOfKinDetails")
            .withIndex("by_staff_id", q =>
                q.eq("staffSubmissionId", args.staffId)
            )
            .unique();

        if (!nextOfKinDetails) return null;

        return nextOfKinDetails;
    },
});

export const getStaffById = query({
    args: {
        staffId: v.id("staffSubmissions"),
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const staff = await ctx.db.get(args.staffId);

        if (!staff) return null;

        return staff;
    },
});

export const getStaffList = query({
    async handler(ctx) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const staffList = await ctx.db.query("staffSubmissions").collect();

        return staffList;
    },
});
