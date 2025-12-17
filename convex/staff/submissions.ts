import { v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { GenderUnion, PositionUnion, ReligionUnion } from "../unions";
import { CustomError } from "../errorUtils";

export const getStaffList = query({
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

export const createStaffSubmission = mutation({
    args: {
        personal: v.object({
            firstName: v.string(),
            lastName: v.string(),
            address: v.string(),
            occupation: v.string(),
            dob: v.number(),
            phoneNumber: v.string(),
            email: v.string(),
            gender: GenderUnion,
            nationality: v.string(),
            religion: ReligionUnion,
            passportUrl: v.string(),
            resumeUrl: v.string(),
            position: PositionUnion,
        }),
        nextOfKin: v.object({
            fullName: v.string(),
            address: v.string(),
            phoneNumber: v.string(),
        }),
        accountDetails: v.object({
            accountName: v.string(),
            accountNumber: v.string(),
            bank: v.string(),
        }),
    },
    async handler(ctx, args) {
        try {
            const { personal, nextOfKin, accountDetails } = args;

            // Check for duplicate email & phone number
            const dupEmail = await ctx.db
                .query("staffSubmissions")
                .filter(q => q.eq(q.field("email"), personal.email))
                .unique();

            if (dupEmail) {
                throw new CustomError("Email exists already");
            }

            const dupPhone = await ctx.db
                .query("staffSubmissions")
                .filter(q => q.eq(q.field("email"), personal.phoneNumber))
                .unique();

            if (dupPhone) {
                throw new CustomError("Phone number exists already");
            }

            // Check if the CEO position has been picked already
            const ceoExistsAlready = await ctx.db
                .query("staffSubmissions")
                .filter(q => q.eq(q.field("position"), "ceo"))
                .unique();

            if (ceoExistsAlready) {
                throw new Error(
                    "You want to collect the company? 😂. Please choose your appropriate position."
                );
            }

            const staffId = await ctx.db.insert("staffSubmissions", {
                address: personal.address,
                dob: personal.dob,
                email: personal.email,
                firstName: personal.firstName,
                gender: personal.gender,
                lastName: personal.lastName,
                nationality: personal.nationality,
                occupation: personal.occupation,
                passportUrl: personal.passportUrl,
                phoneNumber: personal.phoneNumber,
                position: personal.position,
                religion: personal.religion,
                resumeUrl: personal.resumeUrl,
            });

            await ctx.db.insert("staffNextOfKinDetails", {
                address: nextOfKin.address,
                fullName: nextOfKin.fullName,
                phoneNumber: nextOfKin.phoneNumber,
                staffSubmissionId: staffId,
            });

            await ctx.db.insert("staffAccountDetails", {
                accountName: accountDetails.accountName,
                accountNumber: accountDetails.accountNumber,
                bank: accountDetails.bank,
                staffSubmissionId: staffId,
            });

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[ERR]:", err);
            return {
                status: false,
                error: err instanceof Error ? err.message : "Failed to .",
            };
        }
    },
});
