import { z } from "zod";

export const ClientBusinessTypeEnum = z.enum([
    "FAST_FOOD",
    "DINE_IN",
    "CAFE",
    "BAKERY",
]);

export const ClientBusinessBranchTypeEnum = z.enum(["SINGLE", "MULTIPLE"]);

export const ClientStatusEnum = z.enum([
    "DRAFT",
    "SUBMITTED",
    "APPROVED",
    "ONBOARDING",
    "LIVE",
    "INACTIVE",
]);

export const ClientLocationServiceTypesEnum = z.enum([
    "DINE_IN",
    "TAKEAWAY",
    "DELIVERY",
]);

export const ClientSalesOrderChannelsEnum = z.enum([
    "WALK_IN",
    "PHONE",
    "WHATSAPP",
    "SOCIAL",
    "WEBSITE",
]);

export const PaymentMethodsEnum = z.enum(["CASH", "TRANSFER", "POS"]);

export const DeliveryMethodEnum = z.enum(["IN_HOUSE", "THIRD_PARTY", "NONE"]);

export const ClientFeaturePickEnum = z.enum(["NOW", "LATER", "NO"]);

export const ClientMenuFormatEnum = z.enum([
    "paper",
    "image",
    "pdf",
    "excel",
    "pos",
    "whatsapp",
    "google_docs",
    "website",
    "none",
]);

export const clientSchema = z.object({
    /* A. Business Identity */
    business: z.object({
        name: z.string().min(1, "Business name is required"),
        type: ClientBusinessTypeEnum,
        branchType: ClientBusinessBranchTypeEnum,
        yearEstablished: z
            .number()
            .int()
            .min(1800)
            .max(new Date().getFullYear()),
        cacRegistered: z.boolean(),
    }),

    /* B. Primary Contact */
    contact: z.object({
        fullName: z.string().min(1, "Full name is required"),
        role: z.string().min(1, "Role is required"),
        phone: z.string().min(10, "Valid phone number is required"),
        email: z.email("Invalid email address"),
        isDecisionMaker: z.boolean(),
    }),

    /* C. Location & Operations */
    location: z.object({
        address: z.string().min(1, "Address is required"),
        city: z.string().min(1, "City is required"),
        state: z.string().min(1, "State is required"),
        deliveryAreas: z.array(z.string()).optional(),
        serviceTypes: z
            .array(ClientLocationServiceTypesEnum)
            .min(1, "Select at least one service type"),
    }),

    /* I. Consent */
    consent: z.object({
        dataProcessing: z
            .boolean()
            .refine(val => val === true, "Consent is required"),
        infoAccurate: z
            .boolean()
            .refine(val => val === true, "Confirmation is required"),
    }),

    status: ClientStatusEnum,
    updatedAt: z.number().optional(),
});

export const clientConfigSchema = z.object({
    /* C. Brand & Digital Presence */
    brand: z.object({
        primaryColor: z.string().optional(),
        secondaryColor: z.string().optional(),
        logoUrl: z.url().optional().or(z.literal("")),
        assetsUrls: z.array(z.url()).optional(),
        website: z.url().optional().or(z.literal("")),
        domain: z.object({
            hasDomain: z.boolean(),
            preferredName: z.string().optional(),
            tld: z.string().optional(),
        }),
    }),

    /* E. Sales & Ordering */
    sales: z.object({
        menu: z.object({
            format: ClientMenuFormatEnum,
            sourceUrl: z.url().optional().or(z.literal("")),
        }),
        orderChannels: z.array(ClientSalesOrderChannelsEnum),
    }),

    /* G. Internal Ops (Future-facing) */
    internalOps: z.object({
        staffCount: z.number().min(0),
        needsStaffAccounts: z.boolean(),
        currentPaymentMethods: z.array(PaymentMethodsEnum),
        deliveryMethod: DeliveryMethodEnum,
    }),

    features: z.object({
        orderTracking: ClientFeaturePickEnum,
        inventory: ClientFeaturePickEnum,
        reports: ClientFeaturePickEnum,
        customerAnalytics: ClientFeaturePickEnum,
        wantsOnlinePayments: z.boolean(),
        onlineOrdering: z.boolean(),
        tableOrdering: z.boolean(),
        preOrders: z.boolean(),
        scheduledDelivery: z.boolean(),
    }),

    /* H. Timeline */
    timeline: z.object({
        desiredGoLive: z.number().optional(),
        fixedLaunchDate: z.number().optional(),
    }),

    updatedAt: z.number().optional(),
});

export const ClientOnboardingSchema = z.object({
    data: z.object({
        client: clientSchema,
        clientConfig: clientConfigSchema,
    }),
});

export type ClientOnboardingData = z.infer<typeof ClientOnboardingSchema>;
