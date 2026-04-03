"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSurveyStore } from "@/lib/stores/survey-store";
import { questionnaire } from "@/lib/constants";
import { ProgressBar } from "@/components/screens/survey/ProgressBar";
import { QuestionRenderer } from "@/components/screens/survey/QuestionRenderer";
import type { Section } from "@/lib/constants";
const Logo = "/assets/images/lzj_survey_logo.png";

export function SurveyForm() {
    const {
        currentSectionIndex,
        responses,
        setResponse,
        nextSection,
        previousSection,
        resetSurvey,
    } = useSurveyStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const searchParams = useSearchParams();

    // Extract tracking code from URL on mount
    useEffect(() => {
        const urlTrackingCode =
            searchParams.get("trackingCode") || searchParams.get("ref");
        if (urlTrackingCode && !responses["tracking_code"]) {
            setResponse("tracking_code", urlTrackingCode);
        }
    }, [searchParams, responses, setResponse]);

    // Get visible sections based on conditions
    const getVisibleSections = (): Section[] => {
        return questionnaire.filter(section => {
            if (!section.condition) return true;
            const conditionValue = responses[section.condition.questionId];
            return conditionValue === section.condition.value;
        });
    };

    const visibleSections = getVisibleSections();
    const currentSection = visibleSections[currentSectionIndex];

    // Check if current section is valid
    const isSectionValid = () => {
        if (!currentSection) return false;

        return currentSection.questions.every(question => {
            if (!question.required) return true;
            const response = responses[question.id];

            if (question.type === "checkbox") {
                return Array.isArray(response) && response.length > 0;
            }

            return response !== undefined && response !== "";
        });
    };

    const handleNext = () => {
        if (currentSectionIndex < visibleSections.length - 1) {
            nextSection();
        }
    };

    const handlePrevious = () => {
        if (currentSectionIndex > 0) {
            previousSection();
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // Transform responses to match backend API format
            const transformedData: Record<string, string | string[]> = {};

            // Map frontend field IDs to backend field names
            Object.entries(responses).forEach(([key, value]) => {
                // Convert 'Yes'/'No' to uppercase for backend consistency if it matches
                const formattedValue =
                    typeof value === "string" &&
                    (value === "Yes" || value === "No")
                        ? value.toUpperCase()
                        : value;

                switch (key) {
                    case "full_name":
                        transformedData.fullName = formattedValue;
                        break;
                    case "company_name":
                        transformedData.company = formattedValue;
                        break;
                    case "mobile_number":
                        transformedData.contact = formattedValue;
                        break;
                    case "has_database":
                        transformedData.hasDatabase = formattedValue;
                        break;
                    case "know_loyal_customers":
                        transformedData.knowLoyalCustomers = formattedValue;
                        break;
                    case "tracking_method":
                        transformedData.trackingMethod = formattedValue;
                        break;
                    case "decisions_without_data":
                        transformedData.decisionsWithoutData = formattedValue;
                        break;
                    case "data_access_improvement":
                        transformedData.dataAccessImprovement = formattedValue;
                        break;
                    case "want_more_info":
                        transformedData.wantMoreInfo = formattedValue;
                        break;
                    case "ease_of_access":
                        transformedData.easeOfAccess = formattedValue;
                        break;
                    case "auto_reports":
                        transformedData.autoReports = formattedValue;
                        break;
                    case "ecommerce_integration":
                        transformedData.ecommerceIntegration = formattedValue;
                        break;
                    case "system_satisfaction":
                        transformedData.systemSatisfaction = formattedValue;
                        break;
                    case "prefer_better_experience":
                        transformedData.preferBetterExperience = formattedValue;
                        break;
                    case "operational_challenges":
                        transformedData.operationalChallenges = formattedValue;
                        break;
                    case "dont_know_challenges":
                        transformedData.dontKnowChallenges = formattedValue;
                        break;
                    case "record_keeping":
                        transformedData.recordKeeping = formattedValue;
                        break;
                    case "daily_operations":
                        transformedData.dailyOperations = formattedValue;
                        break;
                    case "manual_vs_automated":
                        transformedData.manualVsAutomated = formattedValue;
                        break;
                    case "manual_errors":
                        transformedData.manualErrors = formattedValue;
                        break;
                    case "manage_easily":
                        transformedData.manageEasily = formattedValue;
                        break;
                    case "software_improvement":
                        transformedData.softwareImprovement = formattedValue;
                        break;
                    case "submitted_by":
                        // Keeping this for potential future use or to avoid breaking current store logic,
                        // but it's not sent to the new backend schema unless added manually
                        break;
                    default:
                        transformedData[key] = formattedValue;
                }
            });

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/survey-submissions`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...transformedData,
                        trackingCode: responses["tracking_code"] || "",
                        externalReferenceId: "",
                        // Ensure arrays are converted to strings if needed by backend
                        recordKeeping: Array.isArray(
                            transformedData.recordKeeping,
                        )
                            ? transformedData.recordKeeping.join(", ")
                            : transformedData.recordKeeping,
                        dontKnowChallenges: Array.isArray(
                            transformedData.dontKnowChallenges,
                        )
                            ? transformedData.dontKnowChallenges.join(", ")
                            : transformedData.dontKnowChallenges,
                    }),
                },
            );

            if (response.ok) {
                setSubmitSuccess(true);
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error("Server error:", errorData);

                // Handle different error response formats
                let errorMessage = "";
                if (errorData.error) {
                    errorMessage = errorData.error;
                } else if (errorData.errors) {
                    // Handle array of errors or errors object
                    errorMessage = Array.isArray(errorData.errors)
                        ? errorData.errors.join(", ")
                        : typeof errorData.errors === "string"
                          ? errorData.errors
                          : JSON.stringify(errorData.errors);
                } else if (errorData.message) {
                    errorMessage = errorData.message;
                } else {
                    errorMessage = `Server error: ${response.status} ${response.statusText}`;
                }

                setSubmitError(errorMessage);
            }
        } catch (error) {
            console.error("Error submitting survey:", error);
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Network error: Unable to connect to the server";
            setSubmitError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div
                className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/assets/images/survey-bg.png)",
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center relative z-10">
                    <div className="mb-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Thank You!
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Your responses have been submitted successfully.
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            resetSurvey();
                            setSubmitSuccess(false);
                        }}
                        className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                    >
                        Start New Survey
                    </button>
                </div>
            </div>
        );
    }

    if (!currentSection) {
        return (
            <div
                className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/assets/images/survey-bg.png)",
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="text-center relative z-10 text-white">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    const isLastSection = currentSectionIndex === visibleSections.length - 1;

    return (
        <div
            className="min-h-screen py-12 px-4 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url(/assets/images/survey-bg.png)",
            }}
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
                            <img
                                src={Logo}
                                alt="lzj esoleen"
                                className="w-[50px]"
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">
                            Customer Database Survey
                        </h1>
                        <p className="text-yellow-50">
                            Help us understand your business needs
                        </p>
                    </div>

                    {/* Progress */}
                    <div className="p-8 border-b border-gray-200">
                        <ProgressBar
                            current={currentSectionIndex}
                            total={visibleSections.length}
                        />
                    </div>

                    {/* Section Content */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            {currentSection.title}
                        </h2>

                        <div className="space-y-8">
                            {currentSection.questions.map(question => (
                                <QuestionRenderer
                                    key={question.id}
                                    question={question}
                                    value={responses[question.id]}
                                    onChange={value =>
                                        setResponse(question.id, value)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                        <div className="mx-8 mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
                            <svg
                                className="w-6 h-6 text-red-600 shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <div className="flex-1">
                                <h3 className="font-semibold text-red-900 mb-1">
                                    Submission Failed
                                </h3>
                                <p className="text-red-700 text-sm">
                                    {submitError}
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmitError(null)}
                                className="text-red-400 hover:text-red-600 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="p-8 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                        <button
                            onClick={handlePrevious}
                            disabled={currentSectionIndex === 0}
                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Previous
                        </button>

                        {isLastSection ? (
                            <button
                                onClick={handleSubmit}
                                disabled={!isSectionValid() || isSubmitting}
                                className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Survey"}
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={!isSectionValid()}
                                className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                            >
                                Next Section
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
