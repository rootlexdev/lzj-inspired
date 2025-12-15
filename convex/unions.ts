import { v } from "convex/values";

export const GenderUnion = v.union(v.literal("MALE"), v.literal("FEMALE"));

export const ReligionUnion = v.union(
    v.literal("CHRISTIANITY"),
    v.literal("ISLAM"),
    v.literal("TRADITIONAL"),
    v.literal("OTHER")
);

export const PositionUnion = v.union(
    v.literal("CEO"),
    v.literal("FULL-STACK-DEVELOPER"),
    v.literal("MARKETING-SALES")
);

export const NextOfKinRelationshipUnion = v.union(
    v.literal("SPOUSE"),
    v.literal("PARENT"),
    v.literal("FATHER"),
    v.literal("MOTHER"),
    v.literal("CHILD"),
    v.literal("SIBLING"),
    v.literal("BROTHER"),
    v.literal("SISTER"),
    v.literal("UNCLE"),
    v.literal("AUNT"),
    v.literal("COUSIN"),
    v.literal("GUARDIAN"),
    v.literal("FRIEND"),
    v.literal("OTHER")
);
