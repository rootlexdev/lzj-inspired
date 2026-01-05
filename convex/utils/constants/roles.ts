// roles.ts
import { PERMISSIONS } from "./permissions";

export const ROLE_PERMISSIONS = {
    SUPER_ADMIN: [
        // Everything
        ...Object.values(PERMISSIONS),
    ],

    ADMIN: [
        PERMISSIONS.VIEW_DASHBOARD,

        // User Management
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.ASSIGN_ROLES,
        PERMISSIONS.DISABLE_USERS,

        // Staff Records
        PERMISSIONS.VIEW_ALL_STAFF,
        PERMISSIONS.EDIT_ALL_STAFF,

        // HR (limited)
        PERMISSIONS.VIEW_HR_REPORTS,

        // Security
        PERMISSIONS.VIEW_AUDIT_LOGS,
    ],

    HR: [
        PERMISSIONS.VIEW_DASHBOARD,

        // Staff Records
        PERMISSIONS.VIEW_ALL_STAFF,
        PERMISSIONS.EDIT_ALL_STAFF,

        // HR Operations
        PERMISSIONS.MANAGE_ONBOARDING,
        PERMISSIONS.MANAGE_OFFBOARDING,
        PERMISSIONS.MANAGE_DOCUMENTS,
        PERMISSIONS.VIEW_HR_REPORTS,
    ],

    STAFF: [
        PERMISSIONS.VIEW_DASHBOARD,

        // Self-service only
        PERMISSIONS.VIEW_OWN_PROFILE,
        PERMISSIONS.EDIT_OWN_PROFILE,
    ],
} as const;
