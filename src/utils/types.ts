export type StaffUploadPart = "resume" | "passport";

export type StaffUploadProps = Record<StaffUploadPart, string>;

export type StaffFileMap = Record<StaffUploadPart, File | null>;
