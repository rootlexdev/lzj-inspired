"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";


const SOLUTIONS = [
    {
        id: "rms",
        name: "Restaurant Management System",
        shortName: "RMS",
        tagline: "Command Your Kitchen, Conquer Every Branch",
        description: "The all-in-one platform that gives restaurant owners complete control over multi-location operations, real-time orders, and financial intelligence.",
        status: "live",
        image: "/assets/images/rms/dashboard-overview.png",
        features: [
            { icon: "🏪", title: "Multi-Branch Control", description: "Manage all locations from a single dashboard" },
            { icon: "📊", title: "Real-time Analytics", description: "Live reports and financial insights" },
            { icon: "🍽️", title: "Order Management", description: "Track orders from creation to closing" },
            { icon: "📋", title: "Menu Architect", description: "Dynamic menu and category management" },
        ],
        href: "/solutions/rms",
        pricing: {
            startingAt: "₦75,000",
            period: "/month",
        },
    },
    {
        id: "inventory",
        name: "Inventory & Stock Management",
        shortName: "ISM",
        tagline: "Never Run Out, Never Overstock",
        description: "Intelligent inventory tracking that eliminates waste, automates reordering, and gives you complete visibility into your stock levels across all locations.",
        status: "coming",
        image: null,
        features: [
            { icon: "📦", title: "Real-time Tracking", description: "Know exactly what you have, where" },
            { icon: "🔔", title: "Smart Alerts", description: "Automatic low-stock notifications" },
            { icon: "🤝", title: "Supplier Management", description: "Streamline vendor relationships" },
            { icon: "📉", title: "Waste Analytics", description: "Reduce losses with data insights" },
        ],
        href: "/solutions",
        expectedLaunch: "Q3 2026",
    },
    {
        id: "hr",
        name: "HR & Staff Management",
        shortName: "HRM",
        tagline: "Your Team, Simplified",
        description: "Comprehensive human resource management that handles scheduling, payroll, performance tracking, and team communication — all in one place.",
        status: "coming",
        image: null,
        features: [
            { icon: "📅", title: "Shift Scheduling", description: "Easy drag-and-drop roster management" },
            { icon: "💰", title: "Payroll Integration", description: "Automated salary calculations" },
            { icon: "📈", title: "Performance Metrics", description: "Track and improve team output" },
            { icon: "💬", title: "Team Communication", description: "Built-in messaging and announcements" },
        ],
        href: "/solutions",
        expectedLaunch: "Q4 2026",
    },
    {
        id: "crm",
        name: "Customer Relationship Management",
        shortName: "CRM",
        tagline: "Know Your Customers, Grow Your Business",
        description: "Build lasting customer relationships with loyalty programs, feedback collection, targeted campaigns, and deep insights into customer behavior.",
        status: "coming",
        image: null,
        features: [
            { icon: "🎁", title: "Loyalty Programs", description: "Reward repeat customers automatically" },
            { icon: "⭐", title: "Feedback Collection", description: "Gather and act on reviews" },
            { icon: "📧", title: "Campaign Tools", description: "Targeted marketing made easy" },
            { icon: "🔍", title: "Customer Insights", description: "Understand buying patterns" },
        ],
        href: "/solutions",
        expectedLaunch: "Q1 2027",
    },
];

const BENEFITS = [
    {
        icon: "🔗",
        title: "Seamless Integration",
        description: "All our products work together perfectly. Data flows between systems automatically.",
    },
    {
        icon: "🇳🇬",
        title: "Built for Africa",
        description: "Local support, Naira pricing, and features designed for African business realities.",
    },
    {
        icon: "📱",
        title: "Works Everywhere",
        description: "Access from any device. Works reliably even with inconsistent internet.",
    },
    {
        icon: "🚀",
        title: "Quick Setup",
        description: "Get started in minutes, not months. We handle migration and training.",
    },
];

const Solutions = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        // Hero animation
        gsap.fromTo(
            ".solutions-hero-content",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Solution cards animation
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: 60, opacity: 0 },
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
                        delay: index * 0.1,
                    }
                );
            }
        });

        // Benefits animation
        const benefits = gsap.utils.toArray(".benefit-card") as HTMLElement[];
        gsap.fromTo(
            benefits,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".benefits-section",
                    start: "top 80%",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F8F8F8]">
            {/* Hero Section */}
            <section className="bg-[#0B0D13] pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#F7C74B] blur-3xl" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-[#F7C74B] blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 solutions-hero-content">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                            <span className="text-[#F7C74B] text-sm font-medium">Our Solutions</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                            Software That{" "}
                            <span 
                                className="bg-clip-text text-transparent"
                                style={{ 
                                    backgroundImage: 'linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)' 
                                }}
                            >
                                Fits Your Business
                            </span>
                        </h1>

                        <p className="text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto mb-10">
                            A growing suite of intelligent tools designed to automate operations, 
                            eliminate guesswork, and help African businesses scale with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/get-started">
                                <Button className="px-8 py-6 text-base">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" className="px-8 py-6 text-base border-[#F7C74B] text-[#F7C74B] hover:bg-[#F7C74B]/10">
                                    View Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-8">
                        {SOLUTIONS.map((solution, index) => (
                            <div
                                key={solution.id}
                                ref={(el) => {
                                    if (el) cardsRef.current[index] = el;
                                }}
                                className={cn(
                                    "rounded-3xl overflow-hidden transition-all duration-300",
                                    solution.status === "live"
                                        ? "bg-[#0B0D13]"
                                        : "bg-white border border-gray-200"
                                )}
                            >
                                <div className="p-8 lg:p-12">
                                    <div className={cn(
                                        "lg:flex gap-12 items-center",
                                        index % 2 === 1 && solution.status === "live" ? "lg:flex-row-reverse" : ""
                                    )}>
                                        {/* Content */}
                                        <div className={cn(
                                            "mb-8 lg:mb-0",
                                            solution.status === "live" ? "lg:w-[45%]" : "lg:w-[50%]"
                                        )}>
                                            {/* Status Badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={cn(
                                                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
                                                    solution.status === "live"
                                                        ? "bg-[#F7C74B]/20 border border-[#F7C74B]/30"
                                                        : "bg-gray-100"
                                                )}>
                                                    {solution.status === "live" ? (
                                                        <>
                                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                                            <span className="text-[#F7C74B] text-sm font-medium">Live Now</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="text-[#64748B] text-sm font-medium">Coming {solution.expectedLaunch}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className={cn(
                                                    "px-3 py-1.5 rounded-full text-sm font-bold",
                                                    solution.status === "live"
                                                        ? "bg-white/10 text-[#F8F8F8]"
                                                        : "bg-gray-100 text-[#64748B]"
                                                )}>
                                                    {solution.shortName}
                                                </div>
                                            </div>

                                            {/* Title & Tagline */}
                                            <h2 className={cn(
                                                "text-2xl lg:text-3xl font-bold mb-2",
                                                solution.status === "live" ? "text-[#F8F8F8]" : "text-[#0B0D13]"
                                            )}>
                                                {solution.name}
                                            </h2>
                                            <p className={cn(
                                                "text-lg font-medium mb-4",
                                                solution.status === "live" 
                                                    ? "bg-clip-text text-transparent"
                                                    : "text-[#F7C74B]"
                                            )}
                                            style={solution.status === "live" ? { 
                                                backgroundImage: 'linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)' 
                                            } : {}}
                                            >
                                                {solution.tagline}
                                            </p>

                                            {/* Description */}
                                            <p className={cn(
                                                "leading-relaxed mb-6",
                                                solution.status === "live" ? "text-[#64748B]" : "text-[#64748B]"
                                            )}>
                                                {solution.description}
                                            </p>

                                            {/* Features Grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {solution.features.map((feature) => (
                                                    <div key={feature.title} className="flex items-start gap-3">
                                                        <span className="text-xl">{feature.icon}</span>
                                                        <div>
                                                            <h4 className={cn(
                                                                "font-semibold text-sm",
                                                                solution.status === "live" ? "text-[#F8F8F8]" : "text-[#0B0D13]"
                                                            )}>
                                                                {feature.title}
                                                            </h4>
                                                            <p className="text-[#64748B] text-xs">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Pricing (for live products) */}
                                            {solution.status === "live" && solution.pricing && (
                                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 inline-block">
                                                    <span className="text-[#64748B] text-sm">Starting at </span>
                                                    <span 
                                                        className="text-2xl font-bold bg-clip-text text-transparent"
                                                        style={{ 
                                                            backgroundImage: 'linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)' 
                                                        }}
                                                    >
                                                        {solution.pricing.startingAt}
                                                    </span>
                                                    <span className="text-[#64748B] text-sm">{solution.pricing.period}</span>
                                                </div>
                                            )}

                                            {/* CTAs */}
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                {solution.status === "live" ? (
                                                    <>
                                                        <Link href={solution.href}>
                                                            <Button className="w-full sm:w-auto">
                                                                Explore {solution.shortName}
                                                            </Button>
                                                        </Link>
                                                        <Link href="/get-started">
                                                            <Button 
                                                                variant="outline" 
                                                                className="w-full sm:w-auto border-[#F7C74B] text-[#F7C74B] hover:bg-[#F7C74B]/10"
                                                            >
                                                                Start Free Trial
                                                            </Button>
                                                        </Link>
                                                    </>
                                                ) : (
                                                    <Button 
                                                        variant="outline" 
                                                        className="w-full sm:w-auto"
                                                    >
                                                        Join Waitlist
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Visual */}
                                        <div className={cn(
                                            solution.status === "live" ? "lg:w-[55%]" : "lg:w-[50%]"
                                        )}>
                                            {solution.status === "live" && solution.image ? (
                                                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                                    {/* Browser dots */}
                                                    <div className="bg-[#1A1D27] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                                                        <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                                                        <span className="w-3 h-3 rounded-full bg-[#28CA41]"></span>
                                                        <div className="flex-1 mx-4">
                                                            <div className="bg-white/5 rounded-md py-1.5 px-4 text-center max-w-xs mx-auto">
                                                                <span className="text-white/30 text-xs">app.lzjesoleen.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Image
                                                        src={solution.image}
                                                        alt={solution.name}
                                                        width={800}
                                                        height={500}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="bg-linear-to-br from-gray-100 to-gray-50 rounded-xl p-12 text-center border border-gray-200">
                                                    <div className="w-20 h-20 rounded-2xl bg-[#F7C74B]/20 flex items-center justify-center mx-auto mb-6">
                                                        <span className="text-4xl">
                                                            {solution.features[0].icon}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-[#0B0D13] font-semibold text-lg mb-2">
                                                        Coming {solution.expectedLaunch}
                                                    </h3>
                                                    <p className="text-[#64748B] text-sm">
                                                        We&apos;re working hard to bring you this solution. 
                                                        Join the waitlist to be notified when it launches.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-white benefits-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            Why Choose{" "}
                            <span 
                                className="bg-clip-text text-transparent"
                                style={{ 
                                    backgroundImage: 'linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)' 
                                }}
                            >
                                LZJ Solutions?
                            </span>
                        </h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">
                            Our products are built from the ground up to solve real problems 
                            faced by African businesses every day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {BENEFITS.map((benefit) => (
                            <div 
                                key={benefit.title}
                                className="benefit-card bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#F7C74B]/30 hover:shadow-lg transition-all"
                            >
                                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                                <h3 className="text-lg font-bold text-[#0B0D13] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#64748B] text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Solutions CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#0B0D13] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                        {/* Background decoration */}
                        <div 
                            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                            style={{ 
                                background: 'linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)' 
                            }}
                        />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                                <span className="text-[#F7C74B] text-sm font-medium">Custom Development</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
                                Need Something Specific?
                            </h2>
                            <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
                                Don&apos;t see exactly what you need? We also build custom solutions 
                                tailored to your unique business requirements.
                            </p>

                            <Link href="/get-started">
                                <Button className="px-8 py-4 text-lg">
                                    Let&apos;s Discuss Your Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-[#F8F8F8]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-[#64748B] text-lg mb-8">
                        Join thousands of businesses already transforming their operations with LZJ.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/get-started">
                            <Button className="px-8 py-4 text-lg">
                                Start 14-Day Free Trial
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button variant="outline" className="px-8 py-4 text-lg">
                                View Pricing
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        <span className="flex items-center gap-2 text-[#64748B] text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No credit card required
                        </span>
                        <span className="flex items-center gap-2 text-[#64748B] text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Free migration support
                        </span>
                        <span className="flex items-center gap-2 text-[#64748B] text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Cancel anytime
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;