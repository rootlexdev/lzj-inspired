// Add hotels to business type

import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
    AccountRoleUnion,
    AccountStatusUnion,
    ClientBusinessBranchTypeUnion,
    ClientBusinessTypeUnion,
    ClientFeaturePickUnion,
    ClientLocationServiceTypesUnion,
    ClientMenuFormatUnion,
    ClientSalesOrderChannelsUnion,
    ClientStatusUnion,
    DecisionsWithoutDataUnion,
    DeliveryMethodUnion,
    EasyHardUnion,
    EasyNoEasyUnion,
    GenderUnion,
    ManualAutomatedUnion,
    NextOfKinRelationshipUnion,
    PaymentMethodsUnion,
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

    clients: defineTable({
        /* A. Business Identity */
        business: v.object({
            name: v.string(),
            type: ClientBusinessTypeUnion,
            branchType: ClientBusinessBranchTypeUnion,
            yearEstablished: v.number(),
            cacRegistered: v.boolean(),
        }),
        /* B. Primary Contact */
        contact: v.object({
            fullName: v.string(),
            role: v.string(),
            phone: v.string(),
            email: v.string(),
            isDecisionMaker: v.boolean(),
        }),

        /* C. Location & Operations */
        location: v.object({
            address: v.string(),
            city: v.string(),
            state: v.string(),
            deliveryAreas: v.optional(v.array(v.string())),
            serviceTypes: v.array(ClientLocationServiceTypesUnion),
        }),

        /* I. Consent */
        consent: v.object({
            dataProcessing: v.boolean(),
            infoAccurate: v.boolean(),
        }),

        status: ClientStatusUnion,
        updatedAt: v.optional(v.number()),
    })
        .index("by_email", ["contact.email"])
        .index("by_phone", ["contact.phone"])
        .index("by_business_name", ["business.name"]),
    clientConfigs: defineTable({
        clientId: v.id("clients"),

        /* C. Brand & Digital Presence */
        brand: v.object({
            primaryColor: v.optional(v.string()),
            secondaryColor: v.optional(v.string()),
            logoUrl: v.optional(v.string()),
            assetsUrls: v.optional(v.array(v.string())),
            website: v.optional(v.string()),
            domain: v.object({
                hasDomain: v.boolean(),
                preferredName: v.optional(v.string()),
                tld: v.optional(v.string()),
            }),
        }),

        /* E. Sales & Ordering */
        sales: v.object({
            menu: v.object({
                format: ClientMenuFormatUnion,
                sourceUrl: v.optional(v.string()),
            }),
            orderChannels: v.array(ClientSalesOrderChannelsUnion),
        }),

        /* F. Payments & Fulfillment */

        /* G. Internal Ops (Future-facing) */
        internalOps: v.object({
            staffCount: v.number(),
            needsStaffAccounts: v.boolean(),
            currentPaymentMethods: v.array(PaymentMethodsUnion),
            deliveryMethod: DeliveryMethodUnion,
        }),

        features: v.object({
            orderTracking: ClientFeaturePickUnion,
            inventory: ClientFeaturePickUnion,
            reports: ClientFeaturePickUnion,
            customerAnalytics: ClientFeaturePickUnion,
            wantsOnlinePayments: v.boolean(),
            onlineOrdering: v.boolean(),
            tableOrdering: v.boolean(),
            preOrders: v.boolean(),
            scheduledDelivery: v.boolean(),
        }),

        /* H. Timeline */
        timeline: v.object({
            desiredGoLive: v.optional(v.number()),
            fixedLaunchDate: v.optional(v.number()),
        }),

        updatedAt: v.optional(v.number()),
    }).index("by_client", ["clientId"]),
});
