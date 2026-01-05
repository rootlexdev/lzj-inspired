export const PERMISSIONS = {
    // User & Role Management
    MANAGE_USERS: "manage_users",
    ASSIGN_ROLES: "assign_roles",
    DISABLE_USERS: "disable_users",

    // Staff Records
    VIEW_ALL_STAFF: "view_all_staff",
    EDIT_ALL_STAFF: "edit_all_staff",
    VIEW_OWN_PROFILE: "view_own_profile",
    EDIT_OWN_PROFILE: "edit_own_profile",

    // HR Operations
    MANAGE_ONBOARDING: "manage_onboarding",
    MANAGE_OFFBOARDING: "manage_offboarding",
    MANAGE_DOCUMENTS: "manage_documents",
    VIEW_HR_REPORTS: "view_hr_reports",

    // System & Security
    VIEW_AUDIT_LOGS: "view_audit_logs",
    MANAGE_SYSTEM_SETTINGS: "manage_system_settings",

    // General
    VIEW_DASHBOARD: "view_dashboard",
} as const;
