import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
    AccountRoleUnion,
    AccountStatusUnion,
    DecisionsWithoutDataUnion,
    EasyHardUnion,
    EasyNoEasyUnion,
    GenderUnion,
    ManualAutomatedUnion,
    NextOfKinRelationshipUnion,
    PositionUnion,
    RecordKeepingUnion,
    ReligionUnion,
    TrackingMethodUnion,
    WorkspaceRoleUnion,
    YesNoMaybeUnion,
    YesNoUnion,
} from "./unions";

export default defineSchema({
    ...authTables,
    // auth table
    staff: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        dob: v.number(),
        phoneNumber: v.string(),
        officialEmail: v.string(),
        gender: GenderUnion,

        position: PositionUnion,

        role: AccountRoleUnion,
        avatar: v.optional(v.string()),
        accountStatus: AccountStatusUnion,
        userId: v.id("users"),
        staffSubmissionId: v.id("staffSubmissions"),
    })
        .index("by_position", ["position"])
        .index("by_user_id", ["userId"]),
    staffSubmissions: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        address: v.string(),
        occupation: v.string(),
        dob: v.number(),
        phoneNumber: v.string(),
        email: v.string(),
        gender: GenderUnion,
        nationality: v.string(),
        religion: ReligionUnion,

        passportUrl: v.string(),
        resumeUrl: v.string(),
        position: PositionUnion,
    }).index("by_position", ["position"]),
    staffNextOfKinDetails: defineTable({
        staffSubmissionId: v.id("staffSubmissions"),
        fullName: v.string(),
        address: v.string(),
        phoneNumber: v.string(),
        relationship: v.optional(NextOfKinRelationshipUnion),
        relationshipOther: v.optional(v.string()),
    }),
    staffAccountDetails: defineTable({
        staffSubmissionId: v.id("staffSubmissions"),
        accountName: v.string(),
        accountNumber: v.string(),
        bank: v.string(),
    }),

    surveySubmissions: defineTable({
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
    })
        .index("by_has_database", ["hasDatabase"])
        .index("by_staff", ["submittedBy"]),
    workspaceInvites: defineTable({
        email: v.string(),
        role: WorkspaceRoleUnion,
        joined: v.optional(v.number()),
        resendCount: v.number(),
        invitedBy: v.id("users"),
    }).index("by_invited_by", ["invitedBy"]),
    workspaceMembers: defineTable({
        userId: v.id("users"),
        role: WorkspaceRoleUnion,
    }).index("by_role", ["role"]),
});
