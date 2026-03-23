import { v } from "convex/values";
import { mutation, query } from "../_generated/server";

// Submit a job application
export const submitApplication = mutation({
    args: {
        fullName: v.string(),
        email: v.string(),
        phone: v.string(),
        location: v.string(),
        position: v.string(),
        department: v.string(),
        experienceLevel: v.string(),
        currentRole: v.optional(v.string()),
        linkedInUrl: v.optional(v.string()),
        portfolioUrl: v.optional(v.string()),
        coverLetter: v.string(),
        resumeUrl: v.optional(v.string()),
        heardFrom: v.string(),
        startDate: v.string(),
        salaryExpectation: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Check for duplicate applications (same email + position)
        const existingApplication = await ctx.db
            .query("jobApplications")
            .withIndex("by_email", q => q.eq("email", args.email))
            .filter(q => q.eq(q.field("position"), args.position))
            .first();

        if (existingApplication) {
            throw new Error("You have already applied for this position.");
        }

        const applicationId = await ctx.db.insert("jobApplications", {
            ...args,
            status: "pending",
            submittedAt: Date.now(),
        });

        return applicationId;
    },
});

// Get all active job positions
export const getActivePositions = query({
    args: {},
    handler: async ctx => {
        return await ctx.db
            .query("jobPositions")
            .withIndex("by_active", q => q.eq("isActive", true))
            .collect();
    },
});

// Get positions by department
export const getPositionsByDepartment = query({
    args: { department: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("jobPositions")
            .withIndex("by_department", q =>
                q.eq("department", args.department),
            )
            .filter(q => q.eq(q.field("isActive"), true))
            .collect();
    },
});

// Admin: Get all applications
export const getAllApplications = query({
    args: {
        status: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        if (args.status) {
            return await ctx.db
                .query("jobApplications")
                .withIndex("by_status", q => q.eq("status", args.status!))
                .order("desc")
                .collect();
        }
        return await ctx.db.query("jobApplications").order("desc").collect();
    },
});

// Admin: Update application status
export const updateApplicationStatus = mutation({
    args: {
        applicationId: v.id("jobApplications"),
        status: v.string(),
        notes: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.applicationId, {
            status: args.status,
            notes: args.notes,
        });
    },
});
