import z from "zod";

export const CompanySizeEnum = z.enum(
    [
        "SME", // Micro-tools/Small Automations
        "MID_MARKET", // Standard Business Portals
        "ENTERPRISE", // Advanced BI / Complex Inventory
    ],
    {
        error: "Please select an estimated budget range",
    },
);

export const BudgetEnum = z.enum(
    [
        "UNDER_1M", // Micro-tools/Small Automations
        "1M_TO_5M", // Standard Business Portals
        "5M_TO_15M", // Advanced BI / Complex Inventory
        "15M_TO_50M", // Enterprise-grade systems
        "OVER_50M", // Large scale digital transformation
        "UNDETERMINED", // "I need a quote based on requirements"
    ],
    {
        error: "Please select an estimated budget range",
    },
);

export const IndustryEnum = z.enum(
    [
        "HOSPITALITY_AND_RESTAURANTS", // Your primary target
        "OIL_AND_GAS",
        "LOGISTICS_AND_SUPPLY_CHAIN",
        "RETAIL_AND_ECOMMERCE",
        "FINANCIAL_SERVICES",
        "MANUFACTURING",
        "PROFESSIONAL_SERVICES",
        "OTHER",
    ],
    {
        error: "Please select your industry",
    },
);

export const ProjectTypeEnum = z.enum(
    [
        "DASHBOARD",
        "WORKFLOW_AUTOMATION",
        "PORTALS",
        "INVENTORY",
        "BUSINESS_INTELLIGENCE",
        "AI_ASSISTANCE",
    ],
    {
        error: "Please select a project type",
    },
);

export const SolutionTypeEnum = z.enum(
    [
        "SPOUSE",
        "FATHER",
        "MOTHER",
        "CHILD",
        "BROTHER",
        "SISTER",
        "GUARDIAN",
        "UNCLE",
        "AUNT",
        "COUSIN",
        "FRIEND",
        "OTHER",
    ],
    {
        error: "Please select a relationship",
    },
);

export const NextOfKinRelationshipEnum = z.enum(
    [
        "SPOUSE",
        "FATHER",
        "MOTHER",
        "CHILD",
        "BROTHER",
        "SISTER",
        "GUARDIAN",
        "UNCLE",
        "AUNT",
        "COUSIN",
        "FRIEND",
        "OTHER",
    ],
    {
        error: "Please select a relationship",
    },
);

export const ReligionEnum = z.enum(
    ["CHRISTIANITY", "ISLAM", "TRADITIONAL", "OTHER"],
    {
        error: "Please select a religion",
    },
);

export const JobPositionEnum = z.enum(
    ["CEO", "PERSONAL-ASSISTANT", "FULL-STACK-DEVELOPER", "MARKETING-SALES"],
    {
        error: "Please select a position",
    },
);
