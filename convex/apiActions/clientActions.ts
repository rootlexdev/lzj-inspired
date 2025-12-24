import { ZodError } from "zod";
import { httpAction } from "../_generated/server";
import { formatZodErrors } from "../helpers/formatters";
import { corsHeaders } from "./cors";
import { ClientOnboardingSchema } from "../helpers/validators/clientOnboarding";
import { internal } from "../_generated/api";
import { CustomError } from "../errorUtils";

export const submitClientOnboardingAction = httpAction(async (ctx, request) => {
    const origin = request.headers.get("Origin") ?? undefined;

    // ✅ Preflight request
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders(origin),
        });
    }

    try {
        const body = await request.json();
        // 3. ✅ Validate with Zod
        const result = ClientOnboardingSchema.safeParse(body);

        if (!result.success) {
            // Return a 400 with a structured list of errors
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Validation failed",
                    details: formatZodErrors(result.error),
                }),
                {
                    status: 400,
                    headers: {
                        ...corsHeaders(origin),
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const { client, clientConfig } = result.data.data;

        // 4. Call a mutation to save the data
        // (You cannot write directly to the DB in an action)
        const res = await ctx.runMutation(
            internal.internalServices.clientServices
                .createClientOnboardingService,
            {
                client,
                clientConfig,
            }
        );

        if (!res.status) {
            throw new CustomError(res.error || "Failed to add client");
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                ...corsHeaders(origin),
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.log("The error:", err);
        if (err instanceof ZodError) {
            return new Response(
                JSON.stringify({
                    success: false,
                    errors: formatZodErrors(err),
                }),
                {
                    status: 400,
                    headers: {
                        ...corsHeaders(origin),
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: false,
                error: err instanceof Error ? err.message : "Invalid request",
            }),
            {
                status: 400,
                headers: {
                    ...corsHeaders(origin),
                    "Content-Type": "application/json",
                },
            }
        );
    }
});
