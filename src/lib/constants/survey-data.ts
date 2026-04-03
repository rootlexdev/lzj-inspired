export type QuestionType = "radio" | "checkbox" | "text" | "select";

export interface Question {
    id: string;
    question: string;
    type: QuestionType;
    options?: string[];
    required?: boolean;
    multiline?: boolean;
}

export interface Section {
    id: string;
    title: string;
    questions: Question[];
    condition?: {
        questionId: string;
        value: string;
    };
}

export const questionnaire: Section[] = [
    {
        id: "main",
        title: "Customer Database Assessment",
        questions: [
            {
                id: "tracking_code",
                question: "Tracking Code (Optional)",
                type: "text",
                required: false,
            },
            {
                id: "has_database",
                question: "Do you have a well-defined customer database?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
        ],
    },
    {
        id: "no_database",
        title: "Understanding Your Current Situation",
        condition: {
            questionId: "has_database",
            value: "No",
        },
        questions: [
            {
                id: "know_loyal_customers",
                question: "Do you know who your most loyal customers are?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "tracking_method",
                question: "How do you currently keep track of your customers?",
                type: "radio",
                options: [
                    "Manual records",
                    "Online",
                    "Manual and Online",
                    "None",
                ],
                required: true,
            },
            {
                id: "data_access_improvement",
                question:
                    "Do you agree that having instant access to comprehensive customer data could significantly improve your business?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "decisions_without_data",
                question:
                    "What percentage of business decisions are made without access to proper customer data?",
                type: "radio",
                options: ["Below 50%", "Above 70%"],
                required: true,
            },
            {
                id: "want_more_info",
                question: "Would you like more information about our services?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
        ],
    },
    {
        id: "has_database",
        title: "Database Experience Assessment",
        condition: {
            questionId: "has_database",
            value: "Yes",
        },
        questions: [
            {
                id: "ease_of_access",
                question:
                    "How easy is it for your team to access and use this data?",
                type: "radio",
                options: ["Very Easy", "Not Easy"],
                required: true,
            },
            {
                id: "auto_reports",
                question:
                    "Can you generate reports showing customer history, lifetime value, purchase frequency, etc., automatically?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "ecommerce_integration",
                question:
                    "Does your current system integrate with your e-commerce platform?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "system_satisfaction",
                question:
                    "Are you satisfied with your current system experience?",
                type: "radio",
                options: ["Yes", "No", "Maybe"],
                required: true,
            },
            {
                id: "prefer_better_experience",
                question: "Would you prefer a better experience?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
        ],
    },
    {
        id: "pain_points",
        title: "Current Pain Points & Operational Challenges",
        questions: [
            {
                id: "operational_challenges",
                question:
                    "What are the biggest operational challenges you're currently facing?",
                type: "text",
                required: true,
            },
            {
                id: "dont_know_challenges",
                question: "I don't know",
                type: "checkbox",
                options: ["I don't know"],
                required: false,
            },
        ],
    },
    {
        id: "hidden_problems",
        title: "Diagnosing Hidden Problems",
        questions: [
            {
                id: "record_keeping",
                question: "How do you currently keep your records?",
                type: "checkbox",
                options: ["Manual", "Excel", "Notebook"],
                required: true,
            },
            {
                id: "daily_operations",
                question: "How would you describe your daily operations?",
                type: "radio",
                options: ["Easy", "Hard"],
                required: true,
            },
            {
                id: "manual_vs_automated",
                question:
                    "What percentage of your internal processes are manual vs. automated?",
                type: "radio",
                options: ["10% Manual", "30% Manual", "50%+ Manual"],
                required: true,
            },
            {
                id: "manual_errors",
                question: "Do errors occur often due to manual processes?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "software_improvement",
                question:
                    "Do you believe software could simplify and improve this process?",
                type: "radio",
                options: ["Yes", "No"],
                required: true,
            },
            {
                id: "manage_easily",
                question:
                    "What area of your business would you like to manage more easily?",
                type: "text",
                required: true,
            },
        ],
    },
    {
        id: "contact_information",
        title: "Contact Information",
        questions: [
            {
                id: "full_name",
                question: "Full Name",
                type: "text",
                required: true,
            },
            {
                id: "company_name",
                question: "Company Name",
                type: "text",
                required: true,
            },
            {
                id: "mobile_number",
                question: "Mobile Number",
                type: "text",
                required: true,
            },
        ],
    },
];
