"use client";
import React, { useRef } from "react";
import SuccessModal from "@/components/modals/success-modal";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/ui/custom-select";
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
import { useSubmitProjectRequest } from "@/lib/features/public/use-submit-project-request";
import { useSuccessModal } from "@/lib/stores/modals";
import {
    BudgetRangeTypeEnum,
    CompanySizeTypeEnum,
    IndustryTypeEnum,
    ProjectTypeEnum as ProjectType,
} from "@/utils/enums";
import {
    BUDGET_RANGE_OPTIONS,
    COMPANY_SIZE_OPTIONS,
    INDUSTRY_OPTIONS,
    PROJECT_TYPE_OPTIONS,
} from "@/utils/options";
import {
    BudgetEnum,
    CompanySizeEnum,
    IndustryEnum,
    ProjectTypeEnum,
} from "@/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BENEFITS = [
    {
        icon: "🚀",
        title: "Quick Onboarding",
        description: "Get started in days, not months",
    },
    {
        icon: "🎯",
        title: "Tailored Solutions",
        description: "Built for your specific needs",
    },
    {
        icon: "💬",
        title: "Dedicated Support",
        description: "Expert help when you need it",
    },
    {
        icon: "🔒",
        title: "Secure & Reliable",
        description: "Enterprise-grade security",
    },
];

const TRUSTED_BY = [
    "2,000+ restaurants",
    "15+ states in Nigeria",
    "₦2B+ transactions processed",
];

const GetStartedPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setOpen] = useSuccessModal();
    const { mutate: submit, isPending } = useSubmitProjectRequest();

    const formSchema = z.object({
        fullName: z.string({
            message: "Full name is required",
        }),
        email: z.string().email({
            message: "Please enter a valid email",
        }),
        projectType: ProjectTypeEnum,
        companyName: z.string({ message: "Company name is required" }),
        industry: IndustryEnum,
        projectBrief: z
            .string({
                message: "Please enter a project brief",
            })
            .min(40, "Give a few more details (at least 40 characters)"),
        companySize: CompanySizeEnum,
        budget: BudgetEnum,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            companyName: "",
            projectBrief: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        submit(
            {
                budget: values.budget,
                companyName: values.companyName,
                companySize: values.companySize,
                email: values.email,
                fullName: values.fullName,
                industry: values.industry,
                projectBrief: values.projectBrief,
                projectType: values.projectType,
            },
            {
                onSuccess() {
                    setOpen(true);
                    form.reset();
                    toast.success(
                        "Submitted successfully! Our team will get back to you soon.",
                    );
                },
                onError(error) {
                    toast.error(
                        error.message || "Failed to submit. Please try again.",
                    );
                },
            },
        );
    };

    useGSAP(
        () => {
            // Hero content animation
            gsap.fromTo(
                ".hero-content",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            );

            // Form card animation
            gsap.fromTo(
                ".form-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.2,
                },
            );

            // Benefits animation
            const benefits = gsap.utils.toArray(
                ".benefit-item",
            ) as HTMLElement[];
            gsap.fromTo(
                benefits,
                { x: -20, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.4,
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0B0D13]">
            <SuccessModal message="Your details have been successfully received. Our team will reach out shortly!" />

            {/* Main Content */}
            <div className="relative">
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
                        className="absolute bottom-20 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column - Hero Content */}
                        <div className="hero-content lg:sticky lg:top-32">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#F7C74B] animate-pulse"></span>
                                <span className="text-[#F7C74B] text-sm font-medium">
                                    Start Your Journey
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                                Build a{" "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    Smarter Way
                                </span>{" "}
                                to Work
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                                From automating manual workflows to unlocking
                                hidden insights in your data, we build the tools
                                that keep your business ahead. Tell us about the
                                operational challenges you&apos;re facing, and
                                let&apos;s design a solution that scales with
                                your ambition.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {BENEFITS.map(benefit => (
                                    <div
                                        key={benefit.title}
                                        className="benefit-item flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                                    >
                                        <span className="text-2xl">
                                            {benefit.icon}
                                        </span>
                                        <div>
                                            <h3 className="text-[#F8F8F8] font-semibold text-sm">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-[#64748B] text-xs">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Indicators */}
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-[#64748B] text-sm mb-4">
                                    Trusted by businesses across Nigeria
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {TRUSTED_BY.map(item => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2"
                                        >
                                            <svg
                                                className="w-4 h-4 text-[#F7C74B]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-[#F8F8F8] text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Alternative CTA */}
                            <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-[#F8F8F8] font-medium mb-2">
                                    Just want to explore?
                                </p>
                                <p className="text-[#64748B] text-sm mb-4">
                                    Check out our solutions or start a free
                                    trial of our Restaurant Management System.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/solutions">
                                        <Button
                                            variant="outline"
                                            className="border-[#F7C74B]/50 text-[#F7C74B] hover:bg-[#F7C74B]/10"
                                        >
                                            View Solutions
                                        </Button>
                                    </Link>
                                    <Link href="/solutions/rms">
                                        <Button
                                            variant="outline"
                                            className="border-white/20 text-[#F8F8F8] hover:bg-white/5"
                                        >
                                            Try RMS Free
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="form-card">
                            <div className="bg-[#F8F8F8] rounded-2xl p-6 lg:p-10 shadow-2xl">
                                {/* Form Header */}
                                <div className="text-center mb-8">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        <svg
                                            className="w-7 h-7 text-[#0B0D13]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0B0D13] mb-2">
                                        Tell Us About Your Project
                                    </h2>
                                    <p className="text-[#64748B] text-sm">
                                        Fill out the form below and we&apos;ll
                                        get back to you within 24 hours.
                                    </p>
                                </div>

                                {/* Form */}
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-5"
                                    >
                                        {/* Row 1: Name & Email */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-[#0B0D13]">
                                                            Full Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="John Doe"
                                                                disabled={
                                                                    isPending
                                                                }
                                                                className="bg-white border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20"
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
                                                        <FormLabel className="text-[#0B0D13]">
                                                            Work Email
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                type="email"
                                                                placeholder="john@company.com"
                                                                disabled={
                                                                    isPending
                                                                }
                                                                className="bg-white border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {/* Row 2: Project Type & Company Name */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="projectType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <CustomSelect
                                                                label="Project Type"
                                                                options={
                                                                    PROJECT_TYPE_OPTIONS
                                                                }
                                                                onChange={value => {
                                                                    if (value) {
                                                                        form.setValue(
                                                                            "projectType",
                                                                            value.value as ProjectType,
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
                                                name="companyName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-[#0B0D13]">
                                                            Company Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="Your company"
                                                                disabled={
                                                                    isPending
                                                                }
                                                                className="bg-white border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {/* Row 3: Company Size & Industry */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="companySize"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <CustomSelect
                                                                label="Company Size"
                                                                options={
                                                                    COMPANY_SIZE_OPTIONS
                                                                }
                                                                onChange={value => {
                                                                    if (value) {
                                                                        form.setValue(
                                                                            "companySize",
                                                                            value.value as CompanySizeTypeEnum,
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
                                                name="industry"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <CustomSelect
                                                                label="Industry"
                                                                options={
                                                                    INDUSTRY_OPTIONS
                                                                }
                                                                onChange={value => {
                                                                    if (value) {
                                                                        form.setValue(
                                                                            "industry",
                                                                            value.value as IndustryTypeEnum,
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

                                        {/* Row 4: Budget */}
                                        <FormField
                                            control={form.control}
                                            name="budget"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <CustomSelect
                                                            label="Budget Range"
                                                            options={
                                                                BUDGET_RANGE_OPTIONS
                                                            }
                                                            onChange={value => {
                                                                if (value) {
                                                                    form.setValue(
                                                                        "budget",
                                                                        value.value as BudgetRangeTypeEnum,
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

                                        {/* Row 5: Project Brief */}
                                        <FormField
                                            control={form.control}
                                            name="projectBrief"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[#0B0D13]">
                                                        Project Description
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            placeholder="Tell us about your project, the challenges you're facing, and what you're hoping to achieve..."
                                                            disabled={isPending}
                                                            className="bg-white border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20 min-h-[120px] resize-none"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            disabled={isPending}
                                            className="w-full py-6 text-base font-semibold"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
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
                                                    Submitting...
                                                </span>
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </Button>

                                        {/* Privacy Note */}
                                        <p className="text-center text-[#64748B] text-xs">
                                            By submitting, you agree to our{" "}
                                            <Link
                                                href="/privacy-policy"
                                                className="text-[#F7C74B] hover:underline"
                                            >
                                                Privacy Policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="/terms-service"
                                                className="text-[#F7C74B] hover:underline"
                                            >
                                                Terms of Service
                                            </Link>
                                            .
                                        </p>
                                    </form>
                                </Form>
                            </div>

                            {/* Contact Alternative */}
                            <div className="mt-6 text-center">
                                <p className="text-[#64748B] text-sm">
                                    Prefer to talk to someone directly?{" "}
                                    <Link
                                        href="/contact"
                                        className="text-[#F7C74B] font-medium hover:underline"
                                    >
                                        Contact us
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Quick Links */}
            <div className="bg-[#1A1D27] border-t border-white/10 py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#F7C74B]/20 flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-[#F7C74B]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-[#F8F8F8] font-semibold mb-1">
                                Email Us
                            </h3>
                            <a
                                href="mailto:info@lzjesoleen.com"
                                className="text-[#F7C74B] text-sm hover:underline"
                            >
                                info@lzjesoleen.com
                            </a>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#F7C74B]/20 flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-[#F7C74B]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-[#F8F8F8] font-semibold mb-1">
                                Location
                            </h3>
                            <p className="text-[#64748B] text-sm">
                                Warri, Nigeria
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#F7C74B]/20 flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-[#F7C74B]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-[#F8F8F8] font-semibold mb-1">
                                Response Time
                            </h3>
                            <p className="text-[#64748B] text-sm">
                                Within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;
