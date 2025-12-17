import { ZodError } from "zod";

export function formatZodErrors(error: ZodError): string[] {
    return error.issues.map(issue => {
        const fieldPath =
            issue.path.length > 0 ? `[${issue.path.join(".")}]` : "";

        return `Field ${fieldPath} ${issue.message}`;
    });
}
