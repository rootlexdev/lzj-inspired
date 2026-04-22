"use client";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    steps: string[];
}

export function ProgressBar({
    currentStep,
    totalSteps,
    steps,
}: ProgressBarProps) {
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="w-full space-y-4">
            <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider">
                <span className="text-gold-500">
                    Step {currentStep + 1} of {totalSteps}
                </span>
                <span className="text-gray-400">{steps[currentStep]}</span>
            </div>

            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[#F3F1CF] to-[#EDC675] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
