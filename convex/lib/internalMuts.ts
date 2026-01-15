import { v } from "convex/values";
import { internalMutation } from "../_generated/server";
import { CustomError } from "../errorUtils";

export const createProfileInternal = internalMutation({
    args: {
        email: v.string(),
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        const submission = await ctx.db
            .query("staffSubmissions")
            .filter(q => q.eq(q.field("workMail"), args.email))
            .unique();
        if (submission && submission.workMail) {
            const staffLength = await ctx.db.query("staff").collect();

            return await ctx.db.insert("staff", {
                userId: args.userId,
                accountStatus: "ACTIVE",
                dob: submission.dob,
                email: submission.email,
                firstName: submission.firstName,
                gender: submission.gender,
                lastName: submission.lastName,
                officialEmail: submission.workMail,
                phoneNumber: submission.phoneNumber,
                position: submission.position,
                role: !staffLength.length ? "ADMIN" : "STAFF",
                staffSubmissionId: submission._id,
            });
        }

        throw new CustomError(
            "An error occured while trying to create user account for " +
                args.email
        );
    },
});
