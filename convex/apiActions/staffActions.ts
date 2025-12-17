import { httpAction } from "../_generated/server";
import { internal } from "../_generated/api";

export const getStaffList = httpAction(async ctx => {
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
        })
    );
});
