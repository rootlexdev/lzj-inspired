import { Doc } from "../_generated/dataModel";

export type WorkspaceRoleEnum = "ADMIN" | "MANAGER" | "STAFF";

export type MemberListReturnType = Doc<"staff"> & {
    workspaceRole: WorkspaceRoleEnum;
};
