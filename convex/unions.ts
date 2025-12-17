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

export const TrackingMethodUnion = v.union(
    v.literal("Manual records"),
    v.literal("Online"),
    v.literal("None")
);
export const DecisionsWithoutDataUnion = v.union(
    v.literal("Below 50%"),
    v.literal("Above 70%")
);
export const YesNoUnion = v.union(v.literal("Yes"), v.literal("No"));
export const YesNoMaybeUnion = v.union(
    v.literal("Yes"),
    v.literal("No"),
    v.literal("Maybe")
);

export const EasyNoEasyUnion = v.union(
    v.literal("Very Easy"),
    v.literal("Not Easy")
);

export const RecordKeepingUnion = v.union(
    v.literal("Manual"),
    v.literal("Excel"),
    v.literal("Notebook")
);

export const EasyHardUnion = v.union(v.literal("Easy"), v.literal("Hard"));

export const ManualAutomatedUnion = v.union(
    v.literal("10% Manual"),
    v.literal("30%"),
    v.literal("50%+")
);
