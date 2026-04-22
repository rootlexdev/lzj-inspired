import { ClientOnboardingRequest } from "@/lib/stores/onboarding-store";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_2 || "";

// Define the expected response data structure from the API
export interface OnboardingResponseData {
    id?: string;
    clientId?: string;
    createdAt?: string;
    // Add other fields your API returns
}

export interface ApiResponse<T = OnboardingResponseData> {
    success: boolean;
    message?: string;
    data?: T;
    status?: number;
}

/**
 * Submit client onboarding data to the API
 */
export async function submitOnboarding(
    data: ClientOnboardingRequest,
): Promise<ApiResponse<OnboardingResponseData>> {
    // const response = await fetch(`${API_BASE_URL}/api/onboarding/submit`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });

    const response = await fetch("/api/onboarding/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result: { message?: string; data?: OnboardingResponseData } =
        await response.json();

    if (response.ok) {
        return {
            success: true,
            message: result.message,
            data: result.data,
            status: response.status,
        };
    } else {
        console.error("Onboarding Submission Error:", result);
        throw new OnboardingError(
            result.message || "Submission failed",
            response.status,
        );
    }
}

/**
 * Custom error class for onboarding API errors
 */
export class OnboardingError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = "OnboardingError";
        this.status = status;
    }
}
