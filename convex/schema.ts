import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
    GenderUnion,
    NextOfKinRelationshipUnion,
    PositionUnion,
    ReligionUnion,
} from "./unions";

export default defineSchema({
    ...authTables,
    // auth table
    profile: defineTable({
        body: v.string(),
        user: v.id("users"),
    }),

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
    }),
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
});
