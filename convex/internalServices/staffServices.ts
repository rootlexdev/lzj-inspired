import { internalQuery } from "../_generated/server";
import { PositionUnion } from "../unions";

export const getStaffList = internalQuery({
    args: {
        position: PositionUnion,
    },
    async handler(ctx, args) {
        const staffList = await ctx.db
            .query("staffSubmissions")
            .withIndex("by_position", q => q.eq("position", args.position))
            .collect();

        return staffList;
    },
});
