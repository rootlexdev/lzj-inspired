import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";
import { getAuthUserId } from "../auth";
import { v } from "convex/values";

export const getSurveyById = query({
    args: {
        surveyId: v.id("surveySubmissions"),
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const survey = await ctx.db.get(args.surveyId);

        if (!survey) return null;

        return {
            ...survey,
            staff: await ctx.db.get(survey.submittedBy),
        };
    },
});

export const getAllCustomerSurveys = query({
    args: {
        paginationOpts: paginationOptsValidator,
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);

        if (!userId)
            throw {
                message: "Unauthenticated",
            };

        const surveys = await ctx.db
            .query("surveySubmissions")
            .order("desc")
            .paginate(args.paginationOpts);

        return {
            ...surveys,
            page: await Promise.all(
                surveys.page.map(async survey => {
                    const submittedBy = await ctx.db
                        .query("staffSubmissions")
                        .withIndex("by_id", q =>
                            q.eq("_id", survey.submittedBy),
                        )
                        .first();

                    return {
                        ...survey,
                        staff: submittedBy,
                    };
                }),
            ),
        };
    },
});
