import { SelectOptionType } from "./interfaces";

export const INDUSTRY_OPTIONS = [
    {
        label: "Hospitality & Restaurants",
        value: "HOSPITALITY_AND_RESTAURANTS",
    },
    { label: "Oil & Gas", value: "OIL_AND_GAS" },
    { label: "Logistics & Supply Chain", value: "LOGISTICS_AND_SUPPLY_CHAIN" },
    { label: "Retail & E-commerce", value: "RETAIL_AND_ECOMMERCE" },
    { label: "Financial Services", value: "FINANCIAL_SERVICES" },
    { label: "Manufacturing", value: "MANUFACTURING" },
    { label: "Professional Services", value: "PROFESSIONAL_SERVICES" },
    { label: "Other", value: "OTHER" },
];

export const PROJECT_TYPE_OPTIONS = [
    { label: "Dashboard & Analytics", value: "DASHBOARD" },
    { label: "Workflow Automation", value: "WORKFLOW_AUTOMATION" },
    { label: "Portals", value: "PORTALS" },
    { label: "Inventory Systems", value: "INVENTORY" },
    { label: "Business Intelligence", value: "BUSINESS_INTELLIGENCE" },
    { label: "AI-Assisted Decisioning", value: "AI_ASSISTANCE" },
];

export const COMPANY_SIZE_OPTIONS = [
    { label: "SME (Small/Medium)", value: "SME" },
    { label: "Mid-Market", value: "MID_MARKET" },
    { label: "Enterprise", value: "ENTERPRISE" },
];

export const BUDGET_RANGE_OPTIONS = [
    { label: "Under ₦1M", value: "UNDER_1M" },
    { label: "₦1M - ₦5M", value: "1M_TO_5M" },
    { label: "₦5M - ₦15M", value: "5M_TO_15M" },
    { label: "₦15M - ₦50M", value: "15M_TO_50M" },
    { label: "Above ₦50M", value: "OVER_50M" },
    { label: "Undetermined / Quote Required", value: "UNDETERMINED" },
];

export const INQUIRY_STATUS_OPTIONS = [
    { label: "Pending", value: "PENDING" },
    { label: "Contacted", value: "CONTACTED" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Archived", value: "ARCHIVED" },
];

export const GENDER_OPTIONS: SelectOptionType[] = [
    {
        value: "MALE",
        label: "Male",
    },
    {
        value: "FEMALE",
        label: "Female",
    },
];

export const RELIGION_OPTIONS: SelectOptionType[] = [
    {
        value: "CHRISTIANITY",
        label: "Christianity",
    },
    {
        label: "Islam",
        value: "ISLAM",
    },
    {
        value: "TRADITIONAL",
        label: "Traditional",
    },
    {
        value: "OTHER",
        label: "Other",
    },
];

export const JOB_POSITION_OPTIONS: SelectOptionType[] = [
    {
        value: "CEO",
        label: "CEO",
    },
    {
        value: "PERSONAL-ASSISTANT",
        label: "Personal Assistant",
    },
    {
        value: "FULL-STACK-DEVELOPER",
        label: "Full Stack Developer",
    },
    {
        value: "MARKETING-SALES",
        label: "Marketing/Sales",
    },
];

export const NEXT_OF_KIN_RELATIONSHIP_OPTIONS: SelectOptionType[] = [
    {
        value: "SPOUSE",
        label: "Spouse",
    },
    {
        value: "FATHER",
        label: "Father",
    },
    {
        value: "MOTHER",
        label: "Mother",
    },
    {
        value: "BROTHER",
        label: "Brother",
    },
    {
        value: "SISTER",
        label: "Sister",
    },
    {
        value: "CHILD",
        label: "Child",
    },
    {
        value: "GUARDIAN",
        label: "Guardian",
    },
    {
        value: "UNCLE",
        label: "Uncle",
    },
    {
        value: "AUNT",
        label: "Aunt",
    },
    {
        value: "COUSIN",
        label: "Cousin",
    },
    {
        value: "FRIEND",
        label: "Friend",
    },
    {
        value: "OTHER",
        label: "Other",
    },
];

export const NIGERIAN_BANK_OPTIONS: SelectOptionType[] = [
    { value: "ACCESS_BANK", label: "Access Bank" },
    { value: "GTBANK", label: "Guaranty Trust Bank (GTBank)" },
    { value: "FIRST_BANK", label: "First Bank of Nigeria" },
    { value: "ZENITH_BANK", label: "Zenith Bank" },
    { value: "UBA", label: "United Bank for Africa (UBA)" },
    { value: "UNION_BANK", label: "Union Bank" },
    { value: "FIDELITY_BANK", label: "Fidelity Bank" },
    { value: "FCMB", label: "First City Monument Bank (FCMB)" },
    { value: "STERLING_BANK", label: "Sterling Bank" },
    { value: "STANBIC_IBTC", label: "Stanbic IBTC Bank" },
    { value: "ECOBANK", label: "Ecobank Nigeria" },
    { value: "WEMA_BANK", label: "Wema Bank" },
    { value: "POLARIS_BANK", label: "Polaris Bank" },
    { value: "KEYSTONE_BANK", label: "Keystone Bank" },
    { value: "UNITY_BANK", label: "Unity Bank" },
    { value: "JAIZ_BANK", label: "Jaiz Bank" },
    { value: "PROVIDUS_BANK", label: "Providus Bank" },
    { value: "SUNTRUST_BANK", label: "SunTrust Bank" },
];
