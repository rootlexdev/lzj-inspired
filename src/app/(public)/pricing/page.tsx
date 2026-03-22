"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "annual";

const RMS_PLANS = [
    {
        id: "basic",
        name: "Basic",
        description:
            "Perfect for single-location restaurants getting started with digital management.",
        monthlyPrice: 75000,
        annualPrice: 62500,
        popular: false,
        features: [
            "1 Branch",
            "Up to 20 tables",
            "Basic order management",
            "Daily sales reports",
            "Menu management",
            "Email support",
        ],
        limitations: ["No multi-branch", "No API access"],
        cta: "Start Free Trial",
        ctaVariant: "outline" as const,
    },
    {
        id: "full-suite",
        name: "Full Suite",
        description:
            "For growing restaurants that need advanced features and multi-branch support.",
        monthlyPrice: 150000,
        annualPrice: 125000,
        popular: true,
        features: [
            "Up to 5 Branches",
            "Unlimited tables",
            "Advanced order tracking",
            "Real-time analytics dashboard",
            "Kitchen display system",
            "Staff management",
            "Customer insights",
            "Priority support",
        ],
        limitations: [],
        cta: "Start Free Trial",
        ctaVariant: "default" as const,
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description:
            "Full-scale solution for restaurant chains with custom needs and dedicated support.",
        monthlyPrice: null,
        annualPrice: null,
        popular: false,
        features: [
            "Unlimited Branches",
            "Unlimited tables",
            "Everything in Full Suite",
            "Custom integrations",
            "API access",
            "Dedicated account manager",
            "On-site training",
            "Custom reporting",
            "SLA guarantee",
            "White-label options",
        ],
        limitations: [],
        cta: "Contact Sales",
        ctaVariant: "outline" as const,
    },
];

const COMING_SOON_PRODUCTS = [
    {
        id: "inventory",
        name: "Inventory Management",
        description:
            "Track stock levels, automate reordering, and eliminate waste with intelligent inventory systems.",
        icon: "📦",
        expectedLaunch: "Q3 2026",
        features: [
            "Real-time stock tracking",
            "Auto reorder alerts",
            "Supplier management",
            "Waste analytics",
        ],
    },
    {
        id: "hr",
        name: "HR & Staff Management",
        description:
            "Manage employee schedules, payroll, performance tracking, and team communication.",
        icon: "👥",
        expectedLaunch: "Q4 2026",
        features: [
            "Shift scheduling",
            "Payroll integration",
            "Performance metrics",
            "Team communication",
        ],
    },
    {
        id: "crm",
        name: "Customer Management",
        description:
            "Build lasting customer relationships with loyalty programs and targeted campaigns.",
        icon: "💝",
        expectedLaunch: "Q1 2027",
        features: [
            "Loyalty programs",
            "Feedback collection",
            "Campaign tools",
            "Customer insights",
        ],
    },
];

const FAQS = [
    {
        question: "Is there a free trial?",
        answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. Experience the full power of LZJ RMS risk-free.",
    },
    {
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle with prorated adjustments.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, card payments (Visa, Mastercard), and mobile money. Enterprise clients can arrange custom billing terms.",
    },
    {
        question: "Is there a setup fee?",
        answer: "No setup fees for Basic and Full Suite plans. Enterprise plans may include optional on-site setup and training services.",
    },
    {
        question: "What happens to my data if I cancel?",
        answer: "Your data remains accessible for 30 days after cancellation. You can export everything before your account is fully closed.",
    },
    {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes! Pay annually and save approximately 16% compared to monthly billing. That's essentially 2 months free!",
    },
    {
        question: "Can I use multiple products together?",
        answer: "Yes! When our other products launch, they'll integrate seamlessly with RMS. Bundle pricing will be available for customers using multiple products.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "Basic plans include email support. Full Suite includes priority support with faster response times. Enterprise clients get a dedicated account manager.",
    },
];

const COMPARISON_FEATURES = [
    {
        feature: "Branches",
        basic: "1",
        fullSuite: "Up to 5",
        enterprise: "Unlimited",
    },
    {
        feature: "Tables",
        basic: "Up to 20",
        fullSuite: "Unlimited",
        enterprise: "Unlimited",
    },
    {
        feature: "Order Management",
        basic: "Basic",
        fullSuite: "Advanced",
        enterprise: "Advanced + Custom",
    },
    {
        feature: "Analytics",
        basic: "Daily reports",
        fullSuite: "Real-time dashboard",
        enterprise: "Custom reporting",
    },
    { feature: "Kitchen Display", basic: "—", fullSuite: "✓", enterprise: "✓" },
    {
        feature: "Staff Management",
        basic: "—",
        fullSuite: "✓",
        enterprise: "✓",
    },
    {
        feature: "Customer Insights",
        basic: "—",
        fullSuite: "✓",
        enterprise: "✓",
    },
    // { feature: "API Access", basic: "—", fullSuite: "—", enterprise: "✓" },
    // {
    //     feature: "Custom Integrations",
    //     basic: "—",
    //     fullSuite: "—",
    //     enterprise: "✓",
    // },
    {
        feature: "Dedicated Manager",
        basic: "—",
        fullSuite: "—",
        enterprise: "✓",
    },
    {
        feature: "On-site Training",
        basic: "—",
        fullSuite: "✓",
        enterprise: "✓",
    },
    { feature: "SLA Guarantee", basic: "—", fullSuite: "✓", enterprise: "✓" },
    {
        feature: "Support",
        basic: "Email",
        fullSuite: "Priority",
        enterprise: "24/7 Dedicated",
    },
];

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
        .format(price)
        .replace("NGN", "₦");
};

const PricingPage = () => {
    const [billingPeriod, setBillingPeriod] =
        useState<BillingPeriod>("monthly");
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(
        () => {
            // Hero animation
            gsap.fromTo(
                ".pricing-hero-content",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            );

            // Pricing cards animation
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                        delay: index * 0.15,
                    },
                );
            });

            // Coming soon cards
            const comingSoonCards = gsap.utils.toArray(
                ".coming-soon-card",
            ) as HTMLElement[];
            gsap.fromTo(
                comingSoonCards,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".coming-soon-section",
                        start: "top 80%",
                    },
                },
            );

            // FAQ animation
            const faqItems = gsap.utils.toArray(".faq-item") as HTMLElement[];
            gsap.fromTo(
                faqItems,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".faq-section",
                        start: "top 85%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F8F8F8]">
            {/* Hero Section */}
            <section className="bg-[#0B0D13] pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto text-center pricing-hero-content">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
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
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-[#F7C74B] text-sm font-medium">
                            Transparent Pricing
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                        Simple Pricing for{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Every Stage of Growth
                        </span>
                    </h1>

                    <p className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl mx-auto">
                        Start with a 14-day free trial. No credit card required.
                        Choose the plan that fits your business and scale as you
                        grow.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 p-1.5 bg-white/5 rounded-xl border border-white/10">
                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={cn(
                                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
                                billingPeriod === "monthly"
                                    ? "bg-[#F7C74B] text-[#0B0D13]"
                                    : "text-[#64748B] hover:text-[#F8F8F8]",
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod("annual")}
                            className={cn(
                                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                                billingPeriod === "annual"
                                    ? "bg-[#F7C74B] text-[#0B0D13]"
                                    : "text-[#64748B] hover:text-[#F8F8F8]",
                            )}
                        >
                            Annual
                            <span
                                className={cn(
                                    "px-2 py-0.5 rounded-full text-xs",
                                    billingPeriod === "annual"
                                        ? "bg-[#0B0D13]/20 text-[#0B0D13]"
                                        : "bg-green-500/20 text-green-400",
                                )}
                            >
                                Save 16%
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* RMS Pricing Section */}
            <section className="py-20 px-6 -mt-8">
                <div className="max-w-7xl mx-auto">
                    {/* Product Label */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-[#0B0D13] flex items-center justify-center">
                                <span className="text-[#F7C74B] font-bold text-xs">
                                    RMS
                                </span>
                            </div>
                            <span className="text-[#0B0D13] font-semibold">
                                Restaurant Management System
                            </span>
                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                Live
                            </span>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {RMS_PLANS.map((plan, index) => (
                            <div
                                key={plan.id}
                                ref={el => {
                                    if (el) cardsRef.current[index] = el;
                                }}
                                className={cn(
                                    "relative rounded-2xl p-8 transition-all duration-300",
                                    plan.popular
                                        ? "bg-[#0B0D13] border-2 border-[#F7C74B] shadow-2xl md:scale-105 z-10"
                                        : "bg-white border border-gray-200 hover:border-[#F7C74B]/30 hover:shadow-lg",
                                )}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span
                                            className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#0B0D13]"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3
                                        className={cn(
                                            "text-xl font-bold mb-2",
                                            plan.popular
                                                ? "text-[#F8F8F8]"
                                                : "text-[#0B0D13]",
                                        )}
                                    >
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[#64748B]">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    {plan.monthlyPrice ? (
                                        <>
                                            <div className="flex items-end gap-1">
                                                <span
                                                    className={cn(
                                                        "text-4xl lg:text-5xl font-bold",
                                                        plan.popular
                                                            ? "bg-clip-text text-transparent"
                                                            : "text-[#0B0D13]",
                                                    )}
                                                    style={
                                                        plan.popular
                                                            ? {
                                                                  backgroundImage:
                                                                      "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                              }
                                                            : {}
                                                    }
                                                >
                                                    {formatPrice(
                                                        billingPeriod ===
                                                            "monthly"
                                                            ? plan.monthlyPrice
                                                            : plan.annualPrice!,
                                                    )}
                                                </span>
                                                <span className="text-lg mb-1 text-[#64748B]">
                                                    /month
                                                </span>
                                            </div>
                                            <p className="text-sm mt-1 text-[#64748B]">
                                                {billingPeriod === "annual"
                                                    ? "Billed annually"
                                                    : "Billed monthly"}
                                                {plan.id === "full-suite" &&
                                                    " per branch"}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <span
                                                className={cn(
                                                    "text-4xl lg:text-5xl font-bold",
                                                    plan.popular
                                                        ? "text-[#F8F8F8]"
                                                        : "text-[#0B0D13]",
                                                )}
                                            >
                                                Custom
                                            </span>
                                            <p className="text-sm mt-1 text-[#64748B]">
                                                Tailored to your needs
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <div className="mb-6">
                                    {plan.ctaVariant === "default" ? (
                                        <Link
                                            href="/get-started"
                                            className="block"
                                        >
                                            <button
                                                className="w-full py-3.5 px-6 rounded-[0.625rem] text-[#0B0D13] font-semibold transition-opacity hover:opacity-90"
                                                style={{
                                                    background:
                                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                }}
                                            >
                                                {plan.cta}
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/get-started"
                                            className="block"
                                        >
                                            <button
                                                className={cn(
                                                    "w-full py-3.5 px-6 rounded-[0.625rem] font-semibold border-2 transition-colors",
                                                    plan.popular
                                                        ? "border-[#F7C74B] text-[#F7C74B] hover:bg-[#F7C74B]/10"
                                                        : "border-[#F7C74B] text-[#0B0D13] hover:bg-[#F7C74B]/10",
                                                )}
                                            >
                                                {plan.cta}
                                            </button>
                                        </Link>
                                    )}
                                </div>

                                {/* Free Trial Badge */}
                                {plan.monthlyPrice && (
                                    <div
                                        className={cn(
                                            "text-center mb-6 py-2 rounded-lg text-sm font-medium",
                                            plan.popular
                                                ? "bg-[#F7C74B]/10 text-[#F7C74B]"
                                                : "bg-[#F7C74B]/10 text-[#0B0D13]",
                                        )}
                                    >
                                        🎉 14-day free trial included
                                    </div>
                                )}

                                {/* Divider */}
                                <div
                                    className={cn(
                                        "h-px mb-6",
                                        plan.popular
                                            ? "bg-white/10"
                                            : "bg-gray-200",
                                    )}
                                />

                                {/* Features */}
                                <div className="space-y-3">
                                    <p
                                        className={cn(
                                            "text-sm font-semibold mb-4",
                                            plan.popular
                                                ? "text-[#F8F8F8]"
                                                : "text-[#0B0D13]",
                                        )}
                                    >
                                        What&apos;s included:
                                    </p>
                                    {plan.features.map(feature => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >
                                            <svg
                                                className="w-5 h-5 text-[#F7C74B] shrink-0 mt-0.5"
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
                                            <span
                                                className={cn(
                                                    "text-sm",
                                                    plan.popular
                                                        ? "text-[#F8F8F8]/80"
                                                        : "text-[#64748B]",
                                                )}
                                            >
                                                {feature}
                                            </span>
                                        </div>
                                    ))}

                                    {/* Limitations */}
                                    {plan.limitations.length > 0 && (
                                        <>
                                            <div className="pt-2" />
                                            {plan.limitations.map(
                                                limitation => (
                                                    <div
                                                        key={limitation}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-gray-400 shrink-0 mt-0.5"
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
                                                        <span className="text-sm text-gray-400">
                                                            {limitation}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Compare Plans
                        </h2>
                        <p className="text-[#64748B]">
                            See exactly what you get with each plan
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-[#0B0D13]">
                                        Feature
                                    </th>
                                    <th className="text-center py-4 px-4 font-semibold text-[#0B0D13]">
                                        Basic
                                    </th>
                                    <th className="text-center py-4 px-4">
                                        <span
                                            className="font-semibold bg-clip-text text-transparent"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                            }}
                                        >
                                            Full Suite
                                        </span>
                                    </th>
                                    <th className="text-center py-4 px-4 font-semibold text-[#0B0D13]">
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON_FEATURES.map((row, index) => (
                                    <tr
                                        key={row.feature}
                                        className={cn(
                                            "border-b border-gray-100",
                                            index % 2 === 0
                                                ? "bg-gray-50/50"
                                                : "",
                                        )}
                                    >
                                        <td className="py-4 px-4 text-[#0B0D13] font-medium">
                                            {row.feature}
                                        </td>
                                        <td className="py-4 px-4 text-center text-[#64748B]">
                                            {row.basic === "✓" ? (
                                                <svg
                                                    className="w-5 h-5 text-[#F7C74B] mx-auto"
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
                                            ) : row.basic === "—" ? (
                                                <span className="text-gray-300">
                                                    —
                                                </span>
                                            ) : (
                                                row.basic
                                            )}
                                        </td>
                                        <td className="py-4 px-4 text-center text-[#64748B] bg-[#F7C74B]/5">
                                            {row.fullSuite === "✓" ? (
                                                <svg
                                                    className="w-5 h-5 text-[#F7C74B] mx-auto"
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
                                            ) : row.fullSuite === "—" ? (
                                                <span className="text-gray-300">
                                                    —
                                                </span>
                                            ) : (
                                                row.fullSuite
                                            )}
                                        </td>
                                        <td className="py-4 px-4 text-center text-[#64748B]">
                                            {row.enterprise === "✓" ? (
                                                <svg
                                                    className="w-5 h-5 text-[#F7C74B] mx-auto"
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
                                            ) : row.enterprise === "—" ? (
                                                <span className="text-gray-300">
                                                    —
                                                </span>
                                            ) : (
                                                row.enterprise
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Coming Soon Products */}
            <section className="py-20 px-6 bg-[#F8F8F8] coming-soon-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0D13] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F7C74B] animate-pulse"></span>
                            <span className="text-[#F8F8F8] text-sm font-medium">
                                Coming Soon
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            More Solutions on the Way
                        </h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">
                            We&apos;re building a complete suite of business
                            tools for African businesses. Join the waitlist to
                            be notified when these products launch.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {COMING_SOON_PRODUCTS.map(product => (
                            <div
                                key={product.id}
                                className="coming-soon-card bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F7C74B]/30 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    {/* <span className="text-4xl">
                                        {product.icon}
                                    </span> */}
                                    <span className="px-3 py-1 rounded-full bg-[#0B0D13]/5 text-[#64748B] text-xs font-medium">
                                        {product.expectedLaunch}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#0B0D13] mb-2">
                                    {product.name}
                                </h3>

                                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {product.features.map(feature => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#F7C74B]"></div>
                                            <span className="text-sm text-[#64748B]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-2.5 px-4 rounded-[0.625rem] border border-gray-200 text-[#0B0D13] font-medium text-sm hover:border-[#F7C74B] hover:bg-[#F7C74B]/5 transition-colors group-hover:border-[#F7C74B]">
                                    Join Waitlist
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bundle Teaser */}
                    <div className="mt-12 bg-[#0B0D13] rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-[#F8F8F8] mb-3">
                            Bundle & Save
                        </h3>
                        <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
                            When our new products launch, existing RMS customers
                            will get exclusive bundle pricing. The more you use,
                            the more you save.
                        </p>
                        <Link href="/get-started">
                            <button
                                className="px-6 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold"
                                style={{
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Start with RMS Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-white faq-section">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-[#64748B]">
                            Everything you need to know about our pricing and
                            plans
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-item bg-[#F8F8F8] rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                                <h4 className="font-semibold text-[#0B0D13] mb-3 flex items-start gap-3">
                                    <span
                                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-[#0B0D13]"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        ?
                                    </span>
                                    {faq.question}
                                </h4>
                                <p className="text-[#64748B] text-sm leading-relaxed pl-9">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-[#0B0D13]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
                        Ready to Transform Your{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Business Operations?
                        </span>
                    </h2>
                    <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of businesses already using LZJ to
                        streamline operations, increase efficiency, and drive
                        growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/get-started">
                            <button
                                className="px-8 py-4 rounded-[0.625rem] text-[#0B0D13] font-semibold text-lg"
                                style={{
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Start 14-Day Free Trial
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-4 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#F7C74B] font-semibold text-lg hover:bg-[#F7C74B]/10 transition-colors">
                                Talk to Sales
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
                        <div className="flex items-center gap-2 text-[#64748B]">
                            <svg
                                className="w-5 h-5 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#64748B]">
                            <svg
                                className="w-5 h-5 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">
                                No credit card required
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[#64748B]">
                            <svg
                                className="w-5 h-5 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
