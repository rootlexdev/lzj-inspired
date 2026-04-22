"use client";

import { create } from "zustand";

// Business types enum
export type BusinessType =
    | "RESTAURANT"
    | "FAST_FOOD"
    | "CAFE"
    | "BAKERY"
    | "HOTEL"
    | "OTHER";
export type BranchType = "SINGLE_LOCATION" | "MULTI_BRANCH" | "FRANCHISE";
export type ServiceType = "DINE_IN" | "TAKEAWAY" | "DELIVERY";
export type MenuFormat =
    | "PAPER"
    | "PDF"
    | "IMAGE"
    | "EXCEL"
    | "POS"
    | "BOTH"
    | "NONE";
export type OrderChannel =
    | "POS"
    | "WEBSITE"
    | "WHATSAPP"
    | "SOCIAL"
    | "PHONE"
    | "WALK_IN";
export type DeliveryMethod = "IN_HOUSE" | "THIRD_PARTY" | "NONE";
export type FeaturePicker = "NOW" | "LATER" | "NO";
export type PaymentMethod = "CASH" | "POS" | "TRANSFER" | "MOBILE";

export interface OnboardingData {
    // Business Identity
    restaurantName: string;
    businessType: BusinessType | string;
    branchType: BranchType | string;
    yearEstablished: number;
    cacRegistered: boolean;
    cacRegistrationNumber?: string;

    // Primary Contact
    contactName: string;
    contactRole: string;
    contactPhone: string;
    contactEmail: string;
    isDecisionMaker: boolean;

    // Brand & Digital Presence
    primaryColor: string;
    secondaryColor: string;
    logoUrl: string;
    otherAssets: string[];
    existingWebsite: string;
    hasDomain: boolean;
    preferredName: string;
    preferredSubdomain?: string;
    tld: string;

    // Location & Operations
    businessAddress: string;
    city: string;
    state: string;
    country?: string;
    deliveryAreas: string[];
    serviceTypes: ServiceType[] | string[];

    // Menu & Sales Mode
    menuFormat: MenuFormat | string;
    menuSourceUrl: string;
    orderChannels: OrderChannel[] | string[];
    acceptsReservations?: boolean;

    // Internal Operations
    staffCount: number;
    needsStaffAccounts: boolean;
    staffAccountsNeeded?: number;
    currentPaymentMethods: PaymentMethod[] | string[];
    deliveryMethod: DeliveryMethod | string;

    // Features
    orderTracking: FeaturePicker | string;
    inventory: FeaturePicker | string;
    reports: FeaturePicker | string;
    customerAnalytics: FeaturePicker | string;
    wantsOnlinePayments: boolean;
    onlineOrdering: boolean;
    tableOrdering: boolean;
    preOrders: boolean;
    scheduledDelivery: boolean;
    wantsMultiBranch?: boolean;
    wantsStaffManagement?: boolean;
    wantsCustomerLoyalty?: boolean;

    // Timeline & Consent
    desiredGoLive: string | null;
    urgencyLevel?:
        | "asap"
        | "within_week"
        | "within_month"
        | "flexible"
        | "1-2-weeks"
        | "1-month"
        | "not-sure";
    specialRequirements?: string;
    migrationNeeded?: boolean;
    existingSystem?: string;
    consentDataProcessing: boolean;
    consentInfoAccurate: boolean;
    termsAccepted: boolean;
    source?: string;
    referralCode?: string;
    campaignId?: string;
    notes?: string;
}

// NEW API request body structure (POST /api/onboarding/submit)
export interface ClientOnboardingRequest {
    businessName: string;
    industryType: string;
    industryCategory: string;
    branchType: string;
    yearEstablished: number;
    cacRegistration: string;
    contactFullName: string;
    contactRole: string;
    contactPhone: string;
    contactEmail: string;
    isDecisionMaker: boolean;
    address: string;
    city: string;
    state: string;
    country: string;
    deliveryAreas: string[];
    serviceTypes: string[];
    dataProcessingConsent: boolean;
    accuracyConfirmation: boolean;
    termsAccepted: boolean;
    source: string;
    referralCode?: string;
    campaignId?: string;
    notes?: string;
    config: {
        primaryColor: string;
        secondaryColor: string;
        logoUrl?: string;
        websiteUrl?: string;
        preferredSubdomain?: string;
        wantedFeatures: string[];
        estimatedStaffCount: number;
        staffAccountsNeeded: number;
        paymentMethods: string[];
        desiredGoLiveDate?: string;
        fixedLaunchDate?: string;
        urgencyLevel: string;
        specialRequirements?: string;
        existingSystem?: string;
        migrationNeeded: boolean;
    };
}

interface OnboardingStore {
    currentStep: number;
    data: Partial<OnboardingData>;
    setCurrentStep: (step: number) => void;
    updateData: (data: Partial<OnboardingData>) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
    buildRequestBody: () => ClientOnboardingRequest;
}

export const useOnboardingStore = create<OnboardingStore>()((set, get) => ({
    currentStep: 0,
    data: {
        country: "Nigeria",
        source: "website",
        termsAccepted: false,
        consentDataProcessing: false,
        consentInfoAccurate: false,
    },
    setCurrentStep: step => set({ currentStep: step }),
    updateData: newData =>
        set(state => ({ data: { ...state.data, ...newData } })),
    nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
    prevStep: () =>
        set(state => ({
            currentStep: Math.max(0, state.currentStep - 1),
        })),
    reset: () => set({ currentStep: 0, data: {} }),

    buildRequestBody: (): ClientOnboardingRequest => {
        const d = get().data;

        const industryType = (d.businessType || "RESTAURANT").toUpperCase();

        const resolveIndustryCategory = (type: string): string => {
            if (
                [
                    "RESTAURANT",
                    "FAST_FOOD",
                    "CAFE",
                    "BAR",
                    "BAKERY",
                    "FOOD_TRUCK",
                    "CLOUD_KITCHEN",
                    "CATERING",
                ].includes(type)
            ) {
                return "FOOD_BEVERAGE";
            }
            if (
                [
                    "SALON",
                    "BARBER_SHOP",
                    "SPA",
                    "NAIL_STUDIO",
                    "MASSAGE_CENTER",
                ].includes(type)
            ) {
                return "BEAUTY_WELLNESS";
            }
            if (
                [
                    "GYM",
                    "FITNESS_STUDIO",
                    "YOGA_STUDIO",
                    "CLINIC",
                    "DENTAL_CLINIC",
                ].includes(type)
            ) {
                return "HEALTH_FITNESS";
            }
            if (["HOTEL", "GUEST_HOUSE", "RESORT"].includes(type)) {
                return "HOSPITALITY";
            }
            if (
                [
                    "RETAIL_STORE",
                    "SUPERMARKET",
                    "PHARMACY",
                    "LAUNDRY",
                    "CAR_WASH",
                ].includes(type)
            ) {
                return "RETAIL_SERVICES";
            }
            if (["CO_WORKING_SPACE", "EVENT_CENTER"].includes(type)) {
                return "PROFESSIONAL";
            }
            return "FOOD_BEVERAGE";
        };

        const normalizeUrgency = (value?: string): string => {
            switch (value) {
                case "within_week":
                case "1-2-weeks":
                    return "within_week";
                case "within_month":
                case "1-month":
                    return "within_month";
                case "flexible":
                case "not-sure":
                    return "flexible";
                case "asap":
                default:
                    return "asap";
            }
        };

        const toPositiveInt = (value: unknown, fallback = 1): number => {
            const parsed = Number(value);
            if (!Number.isFinite(parsed)) return fallback;
            const rounded = Math.floor(parsed);
            return rounded > 0 ? rounded : fallback;
        };

        const toIsoDateTime = (value?: string | null): string | undefined => {
            if (!value) return undefined;
            const isoCandidate = value.includes("T")
                ? value
                : `${value}T00:00:00.000Z`;
            const date = new Date(isoCandidate);
            return Number.isNaN(date.getTime())
                ? undefined
                : date.toISOString();
        };

        const resolveWantedFeatures = (): string[] => {
            const features: string[] = [];

            if (d.onlineOrdering || d.preOrders || d.scheduledDelivery) {
                features.push("orders");
            }
            if (d.tableOrdering) {
                features.push("tables");
            }
            if (d.orderTracking === "NOW") {
                features.push("kitchen-display");
            }
            if (d.reports === "NOW") {
                features.push("reports");
            }

            return [...new Set(features)];
        };

        const normalizePaymentMethods = (methods?: string[]): string[] => {
            return (methods || []).map(method => {
                const normalized = method.toUpperCase();
                if (normalized === "TRANSFER") return "transfer";
                if (normalized === "POS") return "pos";
                if (normalized === "CASH") return "cash";
                if (normalized === "MOBILE") return "mobile_money";
                return method.toLowerCase();
            });
        };

        return {
            businessName: d.restaurantName || "",
            industryType,
            industryCategory: resolveIndustryCategory(industryType),
            branchType: d.branchType
                ? d.branchType.toUpperCase()
                : "SINGLE_LOCATION",
            yearEstablished: d.yearEstablished || new Date().getFullYear(),
            cacRegistration:
                d.cacRegistrationNumber ||
                (d.cacRegistered ? "REGISTERED" : "NOT_REGISTERED"),
            contactFullName: d.contactName || "",
            contactRole: d.contactRole || "",
            contactPhone: d.contactPhone || "",
            contactEmail: d.contactEmail || "",
            isDecisionMaker: d.isDecisionMaker || false,
            address: d.businessAddress || "",
            city: d.city || "",
            state: d.state || "",
            country: d.country || "Nigeria",
            deliveryAreas: d.deliveryAreas || [],
            serviceTypes:
                (d.serviceTypes as string[])?.map(s => s.toLowerCase()) || [],
            dataProcessingConsent: d.consentDataProcessing || false,
            accuracyConfirmation: d.consentInfoAccurate || false,
            termsAccepted: d.termsAccepted || false,
            source: d.source || "website",
            referralCode: d.referralCode,
            campaignId: d.campaignId,
            notes: d.notes,
            config: {
                primaryColor: d.primaryColor || "#D4AF37",
                secondaryColor: d.secondaryColor || "#1A1A2E",
                logoUrl: d.logoUrl,
                websiteUrl: d.existingWebsite,
                preferredSubdomain:
                    d.preferredSubdomain ||
                    d.preferredName?.toLowerCase().replace(/\s+/g, "-"),
                wantedFeatures: resolveWantedFeatures(),
                estimatedStaffCount: toPositiveInt(d.staffCount, 1),
                staffAccountsNeeded: toPositiveInt(
                    d.staffAccountsNeeded,
                    toPositiveInt(d.staffCount, 1),
                ),
                paymentMethods: normalizePaymentMethods(
                    d.currentPaymentMethods as string[],
                ),
                desiredGoLiveDate: toIsoDateTime(d.desiredGoLive),
                fixedLaunchDate: toIsoDateTime(d.desiredGoLive),
                urgencyLevel: normalizeUrgency(d.urgencyLevel),
                specialRequirements: d.specialRequirements,
                existingSystem: d.existingSystem,
                migrationNeeded: !!d.migrationNeeded,
            },
        };
    },
}));
