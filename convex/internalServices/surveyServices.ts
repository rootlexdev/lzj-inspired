import { v } from "convex/values";
import { internalMutation } from "../_generated/server";
import {
    DecisionsWithoutDataUnion,
    EasyHardUnion,
    EasyNoEasyUnion,
    ManualAutomatedUnion,
    RecordKeepingUnion,
    TrackingMethodUnion,
    YesNoMaybeUnion,
    YesNoUnion,
} from "../unions";
import { CustomError } from "../errorUtils";

export const submitSurveyService = internalMutation({
    args: {
        data: v.object({
            fullName: v.string(),
            company: v.optional(v.string()),
            contact: v.optional(v.string()),
            // ===== Section 1: Always present =====
            hasDatabase: YesNoUnion,

            // ===== Section 2A: Only if has_database === "No" =====
            knowLoyalCustomers: v.optional(YesNoUnion),

            trackingMethod: v.optional(v.array(TrackingMethodUnion)),
            decisionsWithoutData: v.optional(DecisionsWithoutDataUnion),
            dataAccessImprovement: v.optional(YesNoUnion),
            wantMoreInfo: v.optional(YesNoUnion),

            // ===== Section 2B: Only if has_database === "Yes" =====
            easeOfAccess: v.optional(EasyNoEasyUnion),

            autoReports: v.optional(YesNoUnion),

            ecommerceIntegration: v.optional(YesNoUnion),

            systemSatisfaction: v.optional(YesNoMaybeUnion),
            preferBetterExperience: v.optional(YesNoUnion),

            // ===== Section 3: Always present, optional =====
            operationalChallenges: v.optional(v.string()),

            dontKnowChallenges: v.optional(v.array(v.string())),
            // ===== Section 4: Always present =====
            recordKeeping: v.array(RecordKeepingUnion),

            dailyOperations: EasyHardUnion,

            manualVsAutomated: ManualAutomatedUnion,
            manualErrors: YesNoUnion,
            manageEasily: v.optional(v.string()),

            softwareImprovement: YesNoUnion,

            // ===== Metadata =====
            submittedBy: v.id("staffSubmissions"),
        }),
    },
    handler: async (ctx, args) => {
        try {
            const data = args.data;

            if (data.contact) {
                const dupContact = await ctx.db
                    .query("surveySubmissions")
                    .filter(q => q.eq(q.field("contact"), data.contact))
                    .first();

                if (dupContact) {
                    throw new CustomError("Contact details exists already");
                }
            }

            await ctx.db.insert("surveySubmissions", {
                dailyOperations: data.dailyOperations,
                fullName: data.fullName,
                hasDatabase: data.hasDatabase,
                manualErrors: data.manualErrors,
                manualVsAutomated: data.manualVsAutomated,
                recordKeeping: data.recordKeeping,
                softwareImprovement: data.softwareImprovement,
                submittedBy: data.submittedBy,
                autoReports: data.autoReports,
                company: data.company,
                contact: data.contact,
                dataAccessImprovement: data.dataAccessImprovement,
                decisionsWithoutData: data.decisionsWithoutData,
                dontKnowChallenges: data.dontKnowChallenges,
                easeOfAccess: data.easeOfAccess,
                ecommerceIntegration: data.ecommerceIntegration,
                knowLoyalCustomers: data.knowLoyalCustomers,
                manageEasily: data.manageEasily,
                operationalChallenges: data.operationalChallenges,
                preferBetterExperience: data.preferBetterExperience,
                systemSatisfaction: data.systemSatisfaction,
                trackingMethod: data.trackingMethod,
                wantMoreInfo: data.wantMoreInfo,
            });

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[ERR]:", err);
            return {
                status: false,
                error: err instanceof Error ? err.message : "Failed to .",
            };
        }
    },
});
