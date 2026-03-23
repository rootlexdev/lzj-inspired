"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/ui/custom-select";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import z from "zod";
// import { useSubmitApplication } from "@/lib/features/careers/use-submit-application";
import SuccessModal from "@/components/modals/success-modal";
// import { useSuccessModal } from "@/lib/stores/modals";

// Form Schema
const applicationSchema = z.object({
    fullName: z.string().min(3, "Please enter your full name"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    location: z.string().min(2, "Please enter your location"),
    position: z.string().min(1, "Please select a position"),
    department: z.string().min(1, "Please select a department"),
    experienceLevel: z.string().min(1, "Please select your experience level"),
    currentRole: z.string().optional(),
    linkedInUrl: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),
    portfolioUrl: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),
    coverLetter: z
        .string()
        .min(100, "Please write at least 100 characters about yourself"),
    heardFrom: z.string().min(1, "Please tell us how you heard about us"),
    startDate: z.string().min(1, "Please select when you can start"),
    salaryExpectation: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

// Constants
const DEPARTMENTS = [
    { label: "Engineering", value: "engineering" },
    { label: "Design", value: "design" },
    { label: "Product", value: "product" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
    { label: "Customer Success", value: "customer-success" },
    { label: "Operations", value: "operations" },
];

const POSITIONS = [
    {
        label: "Frontend Engineer",
        value: "frontend-engineer",
        department: "engineering",
    },
    {
        label: "Backend Engineer",
        value: "backend-engineer",
        department: "engineering",
    },
    {
        label: "Full Stack Engineer",
        value: "fullstack-engineer",
        department: "engineering",
    },
    {
        label: "Mobile Developer",
        value: "mobile-developer",
        department: "engineering",
    },
    {
        label: "DevOps Engineer",
        value: "devops-engineer",
        department: "engineering",
    },
    { label: "UI/UX Designer", value: "ui-ux-designer", department: "design" },
    {
        label: "Product Designer",
        value: "product-designer",
        department: "design",
    },
    {
        label: "Product Manager",
        value: "product-manager",
        department: "product",
    },
    {
        label: "Marketing Manager",
        value: "marketing-manager",
        department: "marketing",
    },
    {
        label: "Content Strategist",
        value: "content-strategist",
        department: "marketing",
    },
    { label: "Sales Executive", value: "sales-executive", department: "sales" },
    { label: "Account Manager", value: "account-manager", department: "sales" },
    {
        label: "Customer Success Manager",
        value: "customer-success-manager",
        department: "customer-success",
    },
    {
        label: "Operations Coordinator",
        value: "operations-coordinator",
        department: "operations",
    },
    { label: "General Application", value: "general", department: "general" },
];

const EXPERIENCE_LEVELS = [
    { label: "Entry Level (0-2 years)", value: "entry" },
    { label: "Mid Level (2-5 years)", value: "mid" },
    { label: "Senior Level (5-8 years)", value: "senior" },
    { label: "Lead/Principal (8+ years)", value: "lead" },
];

const HEARD_FROM_OPTIONS = [
    { label: "LinkedIn", value: "linkedin" },
    { label: "Twitter/X", value: "twitter" },
    { label: "Instagram", value: "instagram" },
    { label: "Friend/Referral", value: "referral" },
    { label: "Job Board", value: "job-board" },
    { label: "Google Search", value: "google" },
    { label: "Other", value: "other" },
];

const START_DATE_OPTIONS = [
    { label: "Immediately", value: "immediately" },
    { label: "Within 2 weeks", value: "2-weeks" },
    { label: "Within 1 month", value: "1-month" },
    { label: "Within 2 months", value: "2-months" },
    { label: "More than 2 months", value: "2-months-plus" },
];

const PERKS = [
    {
        icon: "💰",
        title: "Competitive Salary",
        description: "We pay well and review compensation regularly",
    },
    {
        icon: "🏠",
        title: "Remote Friendly",
        description: "Work from anywhere in Nigeria",
    },
    {
        icon: "📚",
        title: "Learning Budget",
        description: "Annual allowance for courses and conferences",
    },
    {
        icon: "🏥",
        title: "Health Insurance",
        description: "Comprehensive HMO coverage for you",
    },
    {
        icon: "🌴",
        title: "Generous PTO",
        description: "Take the time you need to recharge",
    },
    {
        icon: "📈",
        title: "Growth Path",
        description: "Clear career progression and mentorship",
    },
];

const VALUES = [
    {
        icon: "🎯",
        title: "Impact-Driven",
        description:
            "We build solutions that genuinely transform how African businesses operate.",
    },
    {
        icon: "🤝",
        title: "Collaborative",
        description:
            "The best ideas come from working together. We value every voice.",
    },
    {
        icon: "🚀",
        title: "Growth Mindset",
        description:
            "We learn fast, adapt faster, and constantly push to improve.",
    },
    {
        icon: "💡",
        title: "Innovation First",
        description:
            "We're not afraid to challenge conventions and try new approaches.",
    },
];

const CareersPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    // const [, setOpen] = useSuccessModal();
    // const { mutate: submitApplication, isPending } = useSubmitApplication();

    const isPending = false;

    const form = useForm<ApplicationFormValues>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            location: "",
            position: "",
            department: "",
            experienceLevel: "",
            currentRole: "",
            linkedInUrl: "",
            portfolioUrl: "",
            coverLetter: "",
            heardFrom: "",
            startDate: "",
            salaryExpectation: "",
        },
    });

    const filteredPositions = selectedDepartment
        ? POSITIONS.filter(
              p =>
                  p.department === selectedDepartment ||
                  p.department === "general",
          )
        : POSITIONS;

    const onSubmit = (values: ApplicationFormValues) => {
        console.log("Values:", values);
        // submitApplication(
        //     {
        //         ...values,
        //         linkedInUrl: values.linkedInUrl || undefined,
        //         portfolioUrl: values.portfolioUrl || undefined,
        //         salaryExpectation: values.salaryExpectation || undefined,
        //     },
        //     {
        //         onSuccess() {
        //             setOpen(true);
        //             form.reset();
        //             toast.success("Application submitted successfully!");
        //         },
        //         onError(error) {
        //             toast.error(error.message || "Failed to submit application. Please try again.");
        //         },
        //     }
        // );
    };

    useGSAP(
        () => {
            // Hero animation
            gsap.fromTo(
                ".careers-hero",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            );

            // Values animation
            const values = gsap.utils.toArray(".value-card") as HTMLElement[];
            gsap.fromTo(
                values,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".values-section",
                        start: "top 80%",
                    },
                },
            );

            // Perks animation
            const perks = gsap.utils.toArray(".perk-card") as HTMLElement[];
            gsap.fromTo(
                perks,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".perks-section",
                        start: "top 80%",
                    },
                },
            );

            // Form animation
            gsap.fromTo(
                ".application-form",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".application-form",
                        start: "top 85%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F8F8F8]">
            <SuccessModal message="Your application has been submitted successfully! We'll review it and get back to you within 5-7 business days." />

            {/* Hero Section */}
            <section className="bg-[#0B0D13] pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-20 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 careers-hero">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-[#F7C74B] text-sm font-medium">
                                We&apos;re Hiring!
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                            Build the Future of{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                African Business
                            </span>{" "}
                            With Us
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-10">
                            Join a team of passionate engineers, designers, and
                            operators building world-class software for
                            Africa&apos;s growing businesses. We move fast,
                            think big, and always put our customers first.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#open-positions">
                                <Button size="lg">View Open Positions</Button>
                            </a>
                            <Link href="/about">
                                <Button variant="outline" size="lg">
                                    Learn About Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 bg-white -mt-8 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "30+", label: "Team Members" },
                            { value: "2025", label: "Founded" },
                            { value: "100%", label: "Remote OK" },
                            { value: "5★", label: "Glassdoor Rating" },
                        ].map(stat => (
                            <div
                                key={stat.label}
                                className="text-center p-6 rounded-xl bg-[#F8F8F8]"
                            >
                                <p
                                    className="text-3xl font-bold bg-clip-text text-transparent mb-1"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                    }}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-[#64748B] text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us - Values */}
            <section className="py-20 px-6 values-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                            <span className="text-[#0B0D13] text-sm font-medium">
                                Our Culture
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Why Join LZJ?
                        </h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">
                            We&apos;re building more than software — we&apos;re
                            building a company where talented people can do the
                            best work of their careers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map(value => (
                            <div
                                key={value.title}
                                className="value-card bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F7C74B]/30 hover:shadow-lg transition-all"
                            >
                                <span className="text-4xl mb-4 block">
                                    {value.icon}
                                </span>
                                <h3 className="text-lg font-bold text-[#0B0D13] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-[#64748B] text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-20 px-6 bg-white perks-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Perks & Benefits
                        </h2>
                        <p className="text-[#64748B]">
                            We take care of our team so they can take care of
                            our customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PERKS.map(perk => (
                            <div
                                key={perk.title}
                                className="perk-card flex items-start gap-4 p-6 rounded-xl bg-[#F8F8F8] border border-gray-100"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    <span className="text-xl">{perk.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0B0D13] mb-1">
                                        {perk.title}
                                    </h3>
                                    <p className="text-[#64748B] text-sm">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliate Banner */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#0B0D13] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                        {/* Background decoration */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                            style={{
                                background:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="lg:w-2/3">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7C74B]/20 border border-[#F7C74B]/30 mb-4">
                                    <svg
                                        className="w-4 h-4 text-[#F7C74B]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-[#F7C74B] text-sm font-medium">
                                        Partner With Us
                                    </span>
                                </div>

                                <h2 className="text-2xl lg:text-3xl font-bold text-[#F8F8F8] mb-3">
                                    Not Looking for a Job? Join as an{" "}
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        Affiliate Partner
                                    </span>
                                </h2>

                                <p className="text-[#64748B] leading-relaxed">
                                    Earn commissions by referring businesses to
                                    LZJ. Help African businesses modernize their
                                    operations while building a sustainable
                                    income stream.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/affiliate">
                                    <Button size="lg">
                                        Join Affiliate Program
                                    </Button>
                                </Link>
                                <Link href="/affiliate#terms">
                                    <Button variant="outline" size="lg">
                                        View Terms
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="open-positions" className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto application-form">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                            <span className="text-[#0B0D13] text-sm font-medium">
                                Apply Now
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Submit Your Application
                        </h2>
                        <p className="text-[#64748B] max-w-xl mx-auto">
                            Fill out the form below and we&apos;ll get back to
                            you within 5-7 business days. We review every
                            application carefully.
                        </p>
                    </div>

                    <div className="bg-[#F8F8F8] rounded-2xl p-6 lg:p-10 border border-gray-100">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                {/* Section: Personal Information */}
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0B0D13] mb-4 flex items-center gap-2">
                                        <span
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-[#0B0D13]"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            1
                                        </span>
                                        Personal Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Full Name *
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="John Doe"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Email Address *
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="email"
                                                            placeholder="john@email.com"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Phone Number *
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="tel"
                                                            placeholder="+234 xxx xxx xxxx"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Location *
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Lagos, Nigeria"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Section: Professional Information */}
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0B0D13] mb-4 flex items-center gap-2">
                                        <span
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-[#0B0D13]"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            2
                                        </span>
                                        Professional Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="department"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <CustomSelect
                                                            label="Department *"
                                                            options={
                                                                DEPARTMENTS
                                                            }
                                                            onChange={value => {
                                                                if (value) {
                                                                    form.setValue(
                                                                        "department",
                                                                        value.value,
                                                                        {
                                                                            shouldValidate: true,
                                                                        },
                                                                    );
                                                                    setSelectedDepartment(
                                                                        value.value,
                                                                    );
                                                                    form.setValue(
                                                                        "position",
                                                                        "",
                                                                    ); // Reset position
                                                                }
                                                            }}
                                                            value={field.value}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="position"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <CustomSelect
                                                            label="Position *"
                                                            options={filteredPositions.map(
                                                                p => ({
                                                                    label: p.label,
                                                                    value: p.value,
                                                                }),
                                                            )}
                                                            onChange={value => {
                                                                if (value) {
                                                                    form.setValue(
                                                                        "position",
                                                                        value.value,
                                                                        {
                                                                            shouldValidate: true,
                                                                        },
                                                                    );
                                                                }
                                                            }}
                                                            value={field.value}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="experienceLevel"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <CustomSelect
                                                            label="Experience Level *"
                                                            options={
                                                                EXPERIENCE_LEVELS
                                                            }
                                                            onChange={value => {
                                                                if (value) {
                                                                    form.setValue(
                                                                        "experienceLevel",
                                                                        value.value,
                                                                        {
                                                                            shouldValidate: true,
                                                                        },
                                                                    );
                                                                }
                                                            }}
                                                            value={field.value}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="currentRole"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Current Role (Optional)
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Software Engineer at XYZ"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="linkedInUrl"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        LinkedIn URL (Optional)
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="https://linkedin.com/in/johndoe"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="portfolioUrl"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Portfolio URL (Optional)
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="https://johndoe.com"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Section: Application Details */}
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0B0D13] mb-4 flex items-center gap-2">
                                        <span
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-[#0B0D13]"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            3
                                        </span>
                                        Application Details
                                    </h3>

                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="coverLetter"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Cover Letter / Why do
                                                        you want to join LZJ? *
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            placeholder="Tell us about yourself, your experience, and why you're interested in joining LZJ..."
                                                            disabled={isPending}
                                                            className="bg-white min-h-40 resize-none"
                                                        />
                                                    </FormControl>
                                                    <div className="flex justify-between">
                                                        <FormMessage />
                                                        <span className="text-xs text-[#64748B]">
                                                            {field.value
                                                                ?.length ||
                                                                0}{" "}
                                                            characters (min 100)
                                                        </span>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="heardFrom"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <CustomSelect
                                                                label="How did you hear about us? *"
                                                                options={
                                                                    HEARD_FROM_OPTIONS
                                                                }
                                                                onChange={value => {
                                                                    if (value) {
                                                                        form.setValue(
                                                                            "heardFrom",
                                                                            value.value,
                                                                            {
                                                                                shouldValidate: true,
                                                                            },
                                                                        );
                                                                    }
                                                                }}
                                                                value={
                                                                    field.value
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="startDate"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <CustomSelect
                                                                label="When can you start? *"
                                                                options={
                                                                    START_DATE_OPTIONS
                                                                }
                                                                onChange={value => {
                                                                    if (value) {
                                                                        form.setValue(
                                                                            "startDate",
                                                                            value.value,
                                                                            {
                                                                                shouldValidate: true,
                                                                            },
                                                                        );
                                                                    }
                                                                }}
                                                                value={
                                                                    field.value
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="salaryExpectation"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Salary Expectation
                                                        (Optional)
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="e.g., ₦500,000 - ₦700,000 monthly"
                                                            disabled={isPending}
                                                            className="bg-white"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full py-6 text-base"
                                    >
                                        {isPending ? (
                                            <span className="flex items-center gap-2">
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Submitting Application...
                                            </span>
                                        ) : (
                                            "Submit Application"
                                        )}
                                    </Button>

                                    <p className="text-center text-[#64748B] text-xs mt-4">
                                        By submitting, you agree to our{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-[#F7C74B] hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        . We&apos;ll keep your information
                                        confidential.
                                    </p>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-[#0B0D13]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
                        Have Questions About Working at LZJ?
                    </h2>
                    <p className="text-[#64748B] text-lg mb-8">
                        Reach out to our People team. We&apos;re happy to help!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:careers@lzjesoleen.com">
                            <Button size="lg">
                                Email careers@lzjesoleen.com
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
