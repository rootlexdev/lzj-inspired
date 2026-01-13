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
    v.literal("Manual"),
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

export const ProjectTypeUnion = v.union(
    v.literal("DASHBOARD"),
    v.literal("WORKFLOW_AUTOMATION"),
    v.literal("PORTALS"),
    v.literal("INVENTORY"),
    v.literal("BUSINESS_INTELLIGENCE"),
    v.literal("AI_ASSISTANCE")
);

export const CompanySizeUnion = v.union(
    v.literal("SME"), // Micro-tools/Small Automations
    v.literal("MID_MARKET"), // Standard Business Portals
    v.literal("ENTERPRISE") // Advanced BI / Complex Inventory
);

export const BudgetUnion = v.union(
    v.literal("UNDER_1M"), // Micro-tools/Small Automations
    v.literal("1M_TO_5M"), // Standard Business Portals
    v.literal("5M_TO_15M"), // Advanced BI / Complex Inventory
    v.literal("15M_TO_50M"), // Enterprise-grade systems
    v.literal("OVER_50M"), // Large scale digital transformation
    v.literal("UNDETERMINED") // "I need a quote based on requirements"
);

export const IndustryUnion = v.union(
    v.literal("HOSPITALITY_AND_RESTAURANTS"), // Your primary target
    v.literal("OIL_AND_GAS"),
    v.literal("LOGISTICS_AND_SUPPLY_CHAIN"),
    v.literal("RETAIL_AND_ECOMMERCE"),
    v.literal("FINANCIAL_SERVICES"),
    v.literal("MANUFACTURING"),
    v.literal("PROFESSIONAL_SERVICES"),
    v.literal("OTHER")
);

export const ProjectRequestStatusUnion = v.union(
    v.literal("PENDING"),
    v.literal("CONTACTED"),
    v.literal("IN_PROGRESS"),
    v.literal("COMPLETED"),
    v.literal("ARCHIVED")
);

/* Lead state */
export const MessageStatusUnion = v.union(
    v.literal("NEW"),
    v.literal("CONTACTED"),
    v.literal("IN_PROGRESS"),
    v.literal("CLOSE"),
    v.literal("SPAM")
);
