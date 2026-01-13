import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import {
    CONTACT_FORM_ADMIN_NOTIFICATION_TEMPLATE,
    CONTACT_FORM_RECEIVED_TEMPLATE,
} from "./templates";
import { resend } from "../email";

export const sendContactMail = internalAction({
    args: {
        name: v.string(),
        phone: v.string(),
        email: v.string(),
        message: v.string(),
    },
    handler: async (ctx, { email, message, name, phone }) => {
        try {
            const html = CONTACT_FORM_ADMIN_NOTIFICATION_TEMPLATE({
                name,
                email,
                message,
                submittedAt: new Date().toISOString(),
                phone,
            });

            const html2 = CONTACT_FORM_RECEIVED_TEMPLATE({
                name,
                email,
                message,
            });

            await resend.sendEmail(ctx, {
                from: "no-reply@lzjesoleen.com", // Replace with your verified sender email
                to: email, // Recipient email
                subject: "Message Received", // Email subject
                html: html2,
            });

            await resend.sendEmail(ctx, {
                from: "no-reply@lzjesoleen.com", // Replace with your verified sender email
                to: "info@lzjesoleen.com", // Recipient email
                subject: "New Message Received", // Email subject
                html,
            });

            return { success: true };
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return { success: false, error: "Failed to send Email" };
        }
    },
});
