import { action } from "../_generated/server";
import { resend } from "../email";

// Add this to a temporary file or your emails.ts
export const testEmail = action({
    args: {},
    handler: async ctx => {
        await resend.sendEmail(ctx, {
            from: "onboarding@lzjesoleen.com",
            to: ["lexcodeit@gmail.com"],
            subject: "Testing Resend",
            text: "If you see this, Resend is working!",
        });
    },
});
