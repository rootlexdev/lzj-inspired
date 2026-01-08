import { mutation, query } from "../_generated/server";
import { authComponent, getAuthUserId } from "../auth";
import { CustomError } from "../errorUtils";

export const getLoggedInUser = query({
    async handler(ctx) {
        const userId = await getAuthUserId(ctx);
        console.log("User Id:", userId);
        if (!userId) return null;

        const profile = await ctx.db
            .query("staff")
            .filter(q => q.eq(q.field("userId"), userId))
            .unique();

        if (!profile) return null;

        return profile;
    },
});

export const generateUserProfile = mutation({
    async handler(ctx) {
        try {
            const user = await authComponent.getAuthUser(ctx);

            if (!user) throw new CustomError("Unauthenticated");

            const { email } = user;

            const submission = await ctx.db
                .query("staffSubmissions")
                .filter(q => q.eq(q.field("email"), email))
                .unique();

            if (!submission || !submission.workMail)
                throw new CustomError("Submission not found");

            const profileId = await ctx.db.insert("staff", {
                accountStatus: "ACTIVE",
                dob: submission.dob,
                email,
                firstName: submission.firstName,
                gender: submission.gender,
                lastName: submission.lastName,
                officialEmail: submission.workMail,
                phoneNumber: submission.phoneNumber,
                position: submission.position,
                role: "STAFF",
                staffSubmissionId: submission._id,
                userId: user._id,
            });

            return {
                status: true,
                data: profileId,
            };
        } catch (err: unknown) {
            console.log("[ERR]:", err);
            return {
                status: false,
                error:
                    err instanceof Error
                        ? err.message
                        : "Failed to generate user profile.",
            };
        }
    },
});
