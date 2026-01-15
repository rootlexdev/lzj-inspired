import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { CustomError } from "../errorUtils";

export const checkAdminAccountExists = mutation({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const invite = await ctx.db
                .query("workspaceInvites")
                .filter(q => q.eq(q.field("email"), args.email))
                .unique();

            if (invite) {
                return {
                    status: true,
                };
            }

            const submission = await ctx.db
                .query("staffSubmissions")
                .filter(q =>
                    q.or(
                        q.eq(q.field("email"), args.email),
                        q.eq(q.field("workMail"), args.email)
                    )
                )
                .unique();

            if (submission) {
                if (!submission.workMail) {
                    throw new CustomError(
                        "Please upload your work email to continue."
                    );
                }

                if (submission.workMail !== args.email) {
                    throw new CustomError(
                        "Please use your work email to gain access"
                    );
                }

                return {
                    status: true,
                };
            }

            const staff = await ctx.db
                .query("staff")
                .filter(q => q.eq(q.field("email"), args.email))
                .unique();

            if (!staff) {
                throw new CustomError(
                    "Account not found. Please check credentials or contact admin for an invite."
                );
            }

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[CHECK_ACCOUNT_EXISTS_LOGIN_ERR:", err);
            return {
                status: false,
                error:
                    err instanceof Error
                        ? err?.message
                        : "Account does not exist. Please create an account.",
            };
        }
    },
});
