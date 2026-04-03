interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = ((current + 1) / total) * 100;

    return (
        <div className="w-full mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                    Section {current + 1} of {total}
                </span>
                <span className="text-sm font-medium text-yellow-600">
                    {Math.round(percentage)}% Complete
                </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
