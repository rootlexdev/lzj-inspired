import { ZodError } from "zod";
import { httpAction } from "../_generated/server";
import { SurveySchemaWithLogic } from "../helpers/validators/survey";
import { formatZodErrors } from "../helpers/formatters";
import { internal } from "../_generated/api";
import { Id } from "../_generated/dataModel";
import { corsHeaders } from "./cors";

export const submitSurveyAction = httpAction(async (ctx, request) => {
    const origin = request.headers.get("Origin") ?? undefined;

    // ✅ Preflight request
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders(origin),
        });
    }
    try {
        const { data } = await request.json();

        // ✅ Validate
        const parsed = SurveySchemaWithLogic.parse(data);

        console.log("Parsed:", parsed);

        const response = await ctx.runMutation(
            internal.internalServices.surveyServices.submitSurveyService,
            {
                data: {
                    ...parsed,
                    submittedBy: parsed.submittedBy as Id<"staffSubmissions">,
                },
            }
        );

        console.log("response:", response);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                ...corsHeaders(origin),
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
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
            JSON.stringify({ success: false, error: "Invalid request" }),
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
