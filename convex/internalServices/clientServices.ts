import { v } from "convex/values";
import { internalMutation } from "../_generated/server";
import {
    ClientBusinessBranchTypeUnion,
    ClientBusinessTypeUnion,
    ClientFeaturePickUnion,
    ClientLocationServiceTypesUnion,
    ClientMenuFormatUnion,
    ClientSalesOrderChannelsUnion,
    ClientStatusUnion,
    DeliveryMethodUnion,
    PaymentMethodsUnion,
} from "../unions";
import { CustomError } from "../errorUtils";

export const createClientOnboardingService = internalMutation({
    args: {
        client: v.object({
            /* A. Business Identity */
            business: v.object({
                name: v.string(),
                type: ClientBusinessTypeUnion,
                branchType: ClientBusinessBranchTypeUnion,
                yearEstablished: v.number(),
                cacRegistered: v.boolean(),
            }),
            /* B. Primary Contact */
            contact: v.object({
                fullName: v.string(),
                role: v.string(),
                phone: v.string(),
                email: v.string(),
                isDecisionMaker: v.boolean(),
            }),

            /* C. Location & Operations */
            location: v.object({
                address: v.string(),
                city: v.string(),
                state: v.string(),
                deliveryAreas: v.optional(v.array(v.string())),
                serviceTypes: v.array(ClientLocationServiceTypesUnion),
            }),

            /* I. Consent */
            consent: v.object({
                dataProcessing: v.boolean(),
                infoAccurate: v.boolean(),
            }),

            status: ClientStatusUnion,
            updatedAt: v.optional(v.number()),
        }),
        clientConfig: v.object({
            /* C. Brand & Digital Presence */
            brand: v.object({
                primaryColor: v.optional(v.string()),
                secondaryColor: v.optional(v.string()),
                logoUrl: v.optional(v.string()),
                assetsUrls: v.optional(v.array(v.string())),
                website: v.optional(v.string()),
                domain: v.object({
                    hasDomain: v.boolean(),
                    preferredName: v.optional(v.string()),
                    tld: v.optional(v.string()),
                }),
            }),

            /* E. Sales & Ordering */
            sales: v.object({
                menu: v.object({
                    format: ClientMenuFormatUnion,
                    sourceUrl: v.optional(v.string()),
                }),
                orderChannels: v.array(ClientSalesOrderChannelsUnion),
            }),

            /* G. Internal Ops (Future-facing) */
            internalOps: v.object({
                staffCount: v.number(),
                needsStaffAccounts: v.boolean(),
                currentPaymentMethods: v.array(PaymentMethodsUnion),
                deliveryMethod: DeliveryMethodUnion,
            }),

            features: v.object({
                orderTracking: ClientFeaturePickUnion,
                inventory: ClientFeaturePickUnion,
                reports: ClientFeaturePickUnion,
                customerAnalytics: ClientFeaturePickUnion,
                wantsOnlinePayments: v.boolean(),
                onlineOrdering: v.boolean(),
                tableOrdering: v.boolean(),
                preOrders: v.boolean(),
                scheduledDelivery: v.boolean(),
            }),

            /* H. Timeline */
            timeline: v.object({
                desiredGoLive: v.optional(v.number()),
                fixedLaunchDate: v.optional(v.number()),
            }),

            updatedAt: v.optional(v.number()),
        }),
    },
    async handler(ctx, args) {
        try {
            const { clientConfig, client } = args;

            // 1. Check Email
            const existingEmail = await ctx.db
                .query("clients")
                .withIndex("by_email", q =>
                    q.eq("contact.email", client.contact.email)
                )
                .first();

            if (existingEmail) {
                throw new CustomError(
                    "A client with this email already exists"
                );
            }

            // 2. Check Business Name
            const dupName = await ctx.db
                .query("clients")
                .withIndex("by_business_name", q =>
                    q.eq("business.name", client.business.name)
                )
                .first();

            if (dupName) {
                throw new CustomError(
                    "This business name is already registered"
                );
            }

            const clientId = await ctx.db.insert("clients", {
                business: client.business,
                consent: client.consent,
                contact: client.contact,
                location: client.location,
                status: client.status,
                updatedAt: Date.now(),
            });

            await ctx.db.insert("clientConfigs", {
                clientId,
                brand: clientConfig.brand,
                features: clientConfig.features,
                internalOps: clientConfig.internalOps,
                sales: clientConfig.sales,
                timeline: clientConfig.timeline,
                updatedAt: Date.now(),
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
