"use client";

import { Suspense } from "react";
import { SurveyForm } from "@/components/screens/survey/SurveyForm";

export default function SurveyPage() {
    return (
        <main className="min-h-screen">
            <Suspense
                fallback={
                    <div className="min-h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm text-white">
                        <p>Loading...</p>
                    </div>
                }
            >
                <SurveyForm />
            </Suspense>
        </main>
    );
}
