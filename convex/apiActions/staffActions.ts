import { httpAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { corsHeaders } from "./cors";

export const getStaffList = httpAction(async (ctx, request) => {
    const origin = request.headers.get("Origin") ?? undefined;

    // ✅ Preflight request
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders(origin),
        });
    }

    const staffList = await ctx.runQuery(
        internal.internalServices.staffServices.getStaffList,
        {
            position: "MARKETING-SALES",
        }
    );

    return new Response(
        JSON.stringify({
            status: true,
            data: staffList,
        }),
        {
            headers: {
                ...corsHeaders(origin),
                "Content-Type": "application/json",
            },
        }
    );
});
