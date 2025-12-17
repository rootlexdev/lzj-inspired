import { z } from "zod";

export const YesNo = z.enum(["Yes", "No"]);
export const YesNoMaybe = z.enum(["Yes", "No", "Maybe"]);

export const TrackingMethod = z.enum(["Manual records", "Online", "None"]);

export const DecisionsWithoutData = z.enum(["Below 50%", "Above 70%"]);

export const EaseOfAccess = z.enum(["Very Easy", "Not Easy"]);

export const RecordKeeping = z.enum(["Manual", "Excel", "Notebook"]);

export const DailyOperations = z.enum(["Easy", "Hard"]);

export const ManualVsAutomated = z.enum(["10% Manual", "30%", "50%+"]);

export const SurveySchema = z.object({
    fullName: z.string().min(1),
    company: z.string().optional(),
    contact: z.string().optional(),

    // ===== Section 1 =====
    hasDatabase: YesNo,

    // ===== Section 2A (No DB) =====
    knowLoyalCustomers: YesNo.optional(),
    trackingMethod: z.array(TrackingMethod).optional(),
    decisionsWithoutData: DecisionsWithoutData.optional(),
    dataAccessImprovement: YesNo.optional(),
    wantMoreInfo: YesNo.optional(),

    // ===== Section 2B (Has DB) =====
    easeOfAccess: EaseOfAccess.optional(),
    autoReports: YesNo.optional(),
    ecommerceIntegration: YesNo.optional(),
    systemSatisfaction: YesNoMaybe.optional(),
    preferBetterExperience: YesNo.optional(),

    // ===== Section 3 =====
    operationalChallenges: z.string().optional(),
    dontKnowChallenges: z.array(z.string()).optional(),

    // ===== Section 4 =====
    recordKeeping: z.array(RecordKeeping),
    dailyOperations: DailyOperations,
    manualVsAutomated: ManualVsAutomated,
    manualErrors: YesNo,
    manageEasily: z.string().optional(),
    softwareImprovement: YesNo,

    // ===== Metadata =====
    submittedBy: z.string(), // validate ID separately if needed
});

type SurveyData = z.infer<typeof SurveySchema>;

const forbiddenNoDbFields: (keyof SurveyData)[] = [
    "easeOfAccess",
    "autoReports",
    "ecommerceIntegration",
    "systemSatisfaction",
    "preferBetterExperience",
];

const forbiddenHasDbFields: (keyof SurveyData)[] = [
    "knowLoyalCustomers",
    "trackingMethod",
    "decisionsWithoutData",
    "dataAccessImprovement",
    "wantMoreInfo",
];

export const SurveySchemaWithLogic = SurveySchema.superRefine((data, ctx) => {
    if (data.hasDatabase === "No") {
        // Disallow DB-only fields
        forbiddenNoDbFields.forEach(field => {
            if (data[field] !== undefined) {
                ctx.addIssue({
                    path: [field],
                    message: "Field not allowed when hasDatabase is No",
                    code: z.ZodIssueCode.custom,
                });
            }
        });
    }

    if (data.hasDatabase === "Yes") {
        // Disallow No-DB fields
        forbiddenHasDbFields.forEach(field => {
            if (data[field] !== undefined) {
                ctx.addIssue({
                    path: [field],
                    message: "Field not allowed when hasDatabase is Yes",
                    code: z.ZodIssueCode.custom,
                });
            }
        });
    }
});
