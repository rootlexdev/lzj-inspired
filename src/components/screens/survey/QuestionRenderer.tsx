import type { Question } from "@/lib/constants";

interface QuestionRendererProps {
    question: Question;
    value: string | string[] | undefined;
    onChange: (value: string | string[]) => void;
}

export function QuestionRenderer({
    question,
    value,
    onChange,
}: QuestionRendererProps) {
    const handleRadioChange = (option: string) => {
        onChange(option);
    };

    const handleCheckboxChange = (option: string) => {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = currentValues.includes(option)
            ? currentValues.filter(v => v !== option)
            : [...currentValues, option];
        onChange(newValues);
    };

    const handleTextChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        onChange(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    if (question.type === "select" && question.options) {
        return (
            <div className="space-y-3">
                <label className="block text-lg font-medium text-gray-900">
                    {question.question}
                    {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                    )}
                </label>
                <select
                    value={typeof value === "string" ? value : ""}
                    onChange={handleSelectChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all bg-white"
                >
                    <option value="">Select...</option>
                    {question.options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (question.type === "radio" && question.options) {
        return (
            <div className="space-y-3">
                <label className="block text-lg font-medium text-gray-900">
                    {question.question}
                    {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                    )}
                </label>
                <div className="space-y-2">
                    {question.options.map(option => (
                        <label
                            key={option}
                            className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-yellow-400 hover:bg-yellow-50"
                            style={{
                                borderColor:
                                    value === option ? "#eab308" : "#e5e7eb",
                                backgroundColor:
                                    value === option ? "#fef9c3" : "white",
                            }}
                        >
                            <input
                                type="radio"
                                name={question.id}
                                value={option}
                                checked={value === option}
                                onChange={() => handleRadioChange(option)}
                                className="w-5 h-5 text-yellow-600 focus:ring-2 focus:ring-yellow-500"
                            />
                            <span className="ml-3 text-gray-700 font-medium">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        );
    }

    if (question.type === "checkbox" && question.options) {
        const currentValues = Array.isArray(value) ? value : [];
        return (
            <div className="space-y-3">
                <label className="block text-lg font-medium text-gray-900">
                    {question.question}
                    {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                    )}
                </label>
                <div className="space-y-2">
                    {question.options.map(option => (
                        <label
                            key={option}
                            className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-yellow-400 hover:bg-yellow-50"
                            style={{
                                borderColor: currentValues.includes(option)
                                    ? "#eab308"
                                    : "#e5e7eb",
                                backgroundColor: currentValues.includes(option)
                                    ? "#fef9c3"
                                    : "white",
                            }}
                        >
                            <input
                                type="checkbox"
                                name={question.id}
                                value={option}
                                checked={currentValues.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                className="w-5 h-5 text-yellow-600 rounded focus:ring-2 focus:ring-yellow-500"
                            />
                            <span className="ml-3 text-gray-700 font-medium">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        );
    }

    if (question.type === "text") {
        return (
            <div className="space-y-3">
                <label className="block text-lg font-medium text-gray-900">
                    {question.question}
                    {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                    )}
                </label>
                {question.multiline ? (
                    <textarea
                        value={typeof value === "string" ? value : ""}
                        onChange={handleTextChange}
                        rows={4}
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all resize-none"
                        placeholder="Describe..."
                    />
                ) : (
                    <input
                        type="text"
                        value={typeof value === "string" ? value : ""}
                        onChange={handleTextChange}
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="Enter your answer..."
                    />
                )}
            </div>
        );
    }

    return null;
}
