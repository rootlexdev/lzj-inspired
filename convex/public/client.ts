import { v } from "convex/values";
import { mutation } from "../_generated/server";
import {
    BudgetUnion,
    CompanySizeUnion,
    IndustryUnion,
    ProjectTypeUnion,
} from "../unions";
import { CustomError } from "../errorUtils";

export const submitProjectRequest = mutation({
    args: {
        fullName: v.string(),
        email: v.string(),
        projectType: ProjectTypeUnion,
        companyName: v.string(),
        companySize: CompanySizeUnion,
        industry: IndustryUnion,
        budget: BudgetUnion,
        projectBrief: v.string(),
        projectDocumentation: v.optional(v.string()),
    },
    async handler(ctx, args) {
        try {
            const dupName = await ctx.db
                .query("projectRequests")
                .filter(q => q.eq(q.field("fullName"), args.fullName))
                .first();

            if (dupName) {
                throw new CustomError("Name exists already");
            }

            const dupEmail = await ctx.db
                .query("projectRequests")
                .filter(q => q.eq(q.field("email"), args.email))
                .first();

            if (dupEmail) {
                throw new CustomError("Email exists already");
            }

            await ctx.db.insert("projectRequests", {
                budget: args.budget,
                companyName: args.companyName,
                companySize: args.companySize,
                email: args.email,
                fullName: args.fullName,
                industry: args.industry,
                projectBrief: args.projectBrief,
                projectType: args.projectType,
                projectDocumentation: args.projectDocumentation,
                status: "PENDING",
            });

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[ERR]:", err);
            return {
                status: false,
                error:
                    err instanceof Error
                        ? err.message
                        : "Failed to  submit client project request.",
            };
        }
    },
});
