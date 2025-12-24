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
    v.literal("Manual and Online"),
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

export const AccountStatusUnion = v.union(
    v.literal("ACTIVE"),
    v.literal("SUSPENDED"),
    v.literal("BANNED"),
    v.literal("DELETED")
);

export const AccountRoleUnion = v.union(
    v.literal("SUPER_ADMIN"),
    v.literal("ADMIN"),
    v.literal("HR"),
    v.literal("STAFF")
);

export const WorkspaceRoleUnion = v.union(
    v.literal("ADMIN"),
    v.literal("MANAGER"),
    v.literal("STAFF")
);

export const ClientBusinessTypeUnion = v.union(
    v.literal("FAST_FOOD"),
    v.literal("DINE_IN"),
    v.literal("CAFE"),
    v.literal("BAKERY")
);

export const ClientBusinessBranchTypeUnion = v.union(
    v.literal("SINGLE"),
    v.literal("MULTIPLE")
);

export const ClientStatusUnion = v.union(
    v.literal("DRAFT"),
    v.literal("SUBMITTED"),
    v.literal("APPROVED"),
    v.literal("ONBOARDING"),
    v.literal("LIVE"),
    v.literal("INACTIVE")
);
export const ClientLocationServiceTypesUnion = v.union(
    v.literal("DINE_IN"),
    v.literal("TAKEAWAY"),
    v.literal("DELIVERY")
);
export const ClientSalesOrderChannelsUnion = v.union(
    v.literal("WALK_IN"),
    v.literal("PHONE"),
    v.literal("WHATSAPP"),
    v.literal("SOCIAL"),
    v.literal("WEBSITE")
);

export const PaymentMethodsUnion = v.union(
    v.literal("CASH"),
    v.literal("TRANSFER"),
    v.literal("POS")
);

export const DeliveryMethodUnion = v.union(
    v.literal("IN_HOUSE"),
    v.literal("THIRD_PARTY"),
    v.literal("NONE")
);
export const ClientFeaturePickUnion = v.union(
    v.literal("NOW"),
    v.literal("LATER"),
    v.literal("NO")
);

export const ClientMenuFormatUnion = v.union(
    v.literal("paper"),
    v.literal("image"),
    v.literal("pdf"),
    v.literal("excel"),
    v.literal("pos"),
    v.literal("whatsapp"),
    v.literal("google_docs"),
    v.literal("website"),
    v.literal("none")
);
