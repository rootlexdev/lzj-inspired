"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useOnboardingStore } from "@/lib/stores/onboarding-store";
import { submitOnboarding } from "@/lib/features/onboarding-api";
import { ProgressBar } from "@/components/screens/survey/ProgressBar";
import {
    WelcomeStep,
    BusinessIdentityStep,
    ContactStep,
    BrandStep,
    LocationStep,
    MenuStep,
    OperationsStep,
    TimelineStep,
    SuccessStep,
} from "@/components/onboarding";
import Image from "next/image";

// Asset paths
const Logo = "/assets/images/lzj_survey_logo.png";
const SurveyBg = "/assets/images/survey-bg.png";

const ONBOARDING_STEPS = [
    { component: WelcomeStep, name: "Welcome", title: "Welcome" },
    {
        component: BusinessIdentityStep,
        name: "Business Identity",
        title: "Business Information",
    },
    {
        component: ContactStep,
        name: "Primary Contact",
        title: "Contact Person",
    },
    {
        component: BrandStep,
        name: "Brand & Subdomain",
        title: "Brand Identity",
    },
    { component: LocationStep, name: "Location", title: "Business Location" },
    {
        component: MenuStep,
        name: "Menu & Reservations",
        title: "Service Details",
    },
    {
        component: OperationsStep,
        name: "Operations",
        title: "Operational Needs",
    },
    {
        component: TimelineStep,
        name: "Timeline & Consent",
        title: "Final Steps",
    },
    { component: SuccessStep, name: "Success", title: "Done!" },
];

export default function OnboardingPage() {
    const { currentStep, nextStep, prevStep, data, buildRequestBody } =
        useOnboardingStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const CurrentStepComponent = ONBOARDING_STEPS[currentStep].component;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentStep]);

    const canGoNext = () => {
        // Validation helpers
        const validateEmail = (email: string): boolean => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        const validatePhone = (phone: string): boolean => {
            const clean = phone.replace(/\D/g, "");
            return clean.length >= 10;
        };

        switch (currentStep) {
            case 1: // Business Identity
                return !!(
                    data.restaurantName &&
                    data.businessType &&
                    data.branchType &&
                    data.yearEstablished
                );
            case 2: // Contact
                return !!(
                    data.contactName &&
                    data.contactRole &&
                    data.contactEmail &&
                    validateEmail(data.contactEmail) &&
                    data.contactPhone &&
                    validatePhone(data.contactPhone)
                );
            case 3: // Brand
                return !!(
                    data.primaryColor &&
                    (data.preferredSubdomain || data.preferredName)
                );
            case 4: // Location
                return !!(
                    data.businessAddress &&
                    data.city &&
                    data.state &&
                    data.serviceTypes?.length
                );
            case 5: // Menu
                return !!(data.menuFormat && data.orderChannels?.length);
            case 6: // Operations
                return !!(data.staffCount && data.deliveryMethod);
            case 7: // Timeline
                return !!(
                    data.desiredGoLive &&
                    data.termsAccepted &&
                    data.consentDataProcessing
                );
            default:
                return true;
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const body = buildRequestBody();
            const result = await submitOnboarding(body);
            if (result.success) {
                nextStep();
            }
        } catch (error) {
            if (error instanceof Error) {
                setSubmitError(
                    error.message || "Failed to submit. Please try again.",
                );
            } else {
                setSubmitError("Failed to submit. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen py-12 px-4 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SurveyBg})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-linear-to-r from-yellow-600 to-amber-600 p-8 text-white">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-semibold tracking-wider uppercase text-yellow-100">
                                LZJ ESOLEEN
                            </h2>
                            <Image
                                src={Logo}
                                alt="lzj esoleen"
                                width={50}
                                height={50}
                                className="w-[50px]"
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-2 uppercase">
                            Owner Onboarding
                        </h1>
                        <p className="text-yellow-50">
                            {ONBOARDING_STEPS[currentStep].title}
                        </p>
                    </div>

                    {/* Progress */}
                    {currentStep > 0 &&
                        currentStep < ONBOARDING_STEPS.length - 1 && (
                            <div className="p-8 border-b border-gray-200">
                                <ProgressBar
                                    current={currentStep - 1}
                                    total={ONBOARDING_STEPS.length - 2}
                                />
                            </div>
                        )}

                    {/* Step Content */}
                    <div className="p-8 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <CurrentStepComponent key={currentStep} />
                        </AnimatePresence>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                        <div className="mx-8 mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm">
                            {submitError}
                        </div>
                    )}

                    {/* Navigation */}
                    {currentStep < ONBOARDING_STEPS.length - 1 && (
                        <div className="p-8 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 0 || isSubmitting}
                                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Previous
                            </button>

                            {currentStep === ONBOARDING_STEPS.length - 2 ? (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!canGoNext() || isSubmitting}
                                    className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Finalize & Launch"}
                                </button>
                            ) : (
                                <button
                                    onClick={nextStep}
                                    disabled={!canGoNext()}
                                    className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                                >
                                    {currentStep === 0
                                        ? "Start Onboarding"
                                        : "Next Step"}
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 text-center text-white/60 text-sm">
                    © 2026 LZJ ESOLEEN LTD. All rights reserved.
                </div>
            </div>
        </div>
    );
}
