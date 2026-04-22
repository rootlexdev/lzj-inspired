import { NextRequest, NextResponse } from "next/server";
import { ClientOnboardingRequest } from "@/lib/stores/onboarding-store";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL_2 ||
    "https://staging-rms-lzjesoleen.onrender.com";

export async function POST(request: NextRequest) {
    try {
        const body: ClientOnboardingRequest = await request.json();

        const response = await fetch(`${API_BASE_URL}/api/onboarding/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const result = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: result.message || "Submission failed",
                },
                { status: response.status },
            );
        }

        return NextResponse.json({
            success: true,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Onboarding proxy error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 },
        );
    }
}
