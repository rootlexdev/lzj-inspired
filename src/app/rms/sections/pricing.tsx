"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PRICING_PLANS = [
    {
        id: "basic",
        name: "Basic",
        description:
            "Perfect for single-location restaurants getting started with digital management.",
        price: "₦75,000",
        period: "/month",
        billedAs: "Billed monthly",
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
        price: "₦150,000",
        period: "/month",
        billedAs: "Billed monthly per branch",
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
        price: "Custom",
        period: "",
        billedAs: "Tailored to your needs",
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

const FAQS = [
    {
        question: "Is there a free trial?",
        answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
    },
    {
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, card payments (Visa, Mastercard), and mobile money. Enterprise clients can arrange custom billing.",
    },
    {
        question: "Is there a setup fee?",
        answer: "No setup fees for Basic and Full Suite plans. Enterprise plans may include optional on-site setup services.",
    },
    {
        question: "What happens to my data if I cancel?",
        answer: "Your data remains accessible for 30 days after cancellation. You can export everything before your account is closed.",
    },
    {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes! Pay annually and get 2 months free on any plan. That's a 16% discount.",
    },
];

const Pricing = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(
        () => {
            // Animate pricing cards
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

            // Animate FAQs
            const faqItems = gsap.utils.toArray(".faq-item") as HTMLElement[];
            gsap.fromTo(
                faqItems,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".faq-grid",
                        start: "top 85%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section ref={containerRef} id="pricing" className="py-24 bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                        <span className="text-[#0B0D13] text-sm font-medium">
                            Simple, Transparent Pricing
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D13] leading-tight mb-6">
                        Choose the Plan That{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                            }}
                        >
                            Fits Your Business
                        </span>
                    </h2>

                    <p className="text-lg text-[#64748B] leading-relaxed">
                        Start with a 14-day free trial. No credit card required.
                        Scale up as your restaurant grows.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {PRICING_PLANS.map((plan, index) => (
                        <div
                            key={plan.id}
                            ref={el => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className={cn(
                                "relative rounded-2xl p-8 transition-all duration-300",
                                plan.popular
                                    ? "bg-[#0B0D13] border-2 border-[#F7C74B] shadow-2xl scale-105 z-10"
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
                                <p
                                    className={cn(
                                        "text-sm leading-relaxed",
                                        plan.popular
                                            ? "text-[#64748B]"
                                            : "text-[#64748B]",
                                    )}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
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
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span
                                            className={cn(
                                                "text-lg mb-1",
                                                plan.popular
                                                    ? "text-[#64748B]"
                                                    : "text-[#64748B]",
                                            )}
                                        >
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <p
                                    className={cn(
                                        "text-sm mt-1",
                                        plan.popular
                                            ? "text-[#64748B]"
                                            : "text-[#64748B]",
                                    )}
                                >
                                    {plan.billedAs}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="mb-8">
                                {plan.ctaVariant === "default" ? (
                                    <Link href="/get-started" className="block">
                                        <button
                                            className="w-full py-3 px-6 rounded-[0.625rem] text-[#0B0D13] font-semibold transition-opacity hover:opacity-90"
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
                                        href={
                                            plan.id === "enterprise"
                                                ? "/get-started"
                                                : "/get-started"
                                        }
                                        className="block"
                                    >
                                        <button
                                            className={cn(
                                                "w-full py-3 px-6 rounded-[0.625rem] font-semibold border-2 transition-colors",
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
                                        {plan.limitations.map(limitation => (
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
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Annual Discount Banner */}
                <div className="bg-[#0B0D13] rounded-2xl p-8 mb-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center"
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
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[#F8F8F8] font-semibold text-xl mb-1">
                                    Save 16% with Annual Billing
                                </h3>
                                <p className="text-[#64748B]">
                                    Pay for 10 months, get 12 months of service.
                                    That&apos;s 2 months free!
                                </p>
                            </div>
                        </div>
                        <Link href="/get-started">
                            <button
                                className="px-6 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold whitespace-nowrap"
                                style={{
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Get Annual Plan
                            </button>
                        </Link>
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B0D13] mb-4">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-[#64748B]">
                            Everything you need to know about our pricing and
                            plans.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 faq-grid">
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-item bg-white rounded-xl p-6 border border-gray-200 hover:border-[#F7C74B]/30 transition-colors"
                            >
                                <h4 className="font-semibold text-[#0B0D13] mb-2 flex items-start gap-3">
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

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-[#64748B] mb-4">
                        Still have questions? We&apos;re here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/get-started">
                            <button
                                className="px-8 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold"
                                style={{
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Start 14-Day Free Trial
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-3 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#0B0D13] font-semibold hover:bg-[#F7C74B]/10 transition-colors">
                                Talk to Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
