"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
// import TeamMembersWithNames from "./team-members-with-names";
import TeamMembersOnly from "./team-members-only";
// import Image from "next/image";

const CORE_VALUES = [
    {
        icon: "🎯",
        title: "Clarity Over Complexity",
        description:
            "We believe powerful software doesn't need to be complicated. Every feature we build prioritizes simplicity and ease of use.",
    },
    {
        icon: "🤝",
        title: "African-First Approach",
        description:
            "We understand the unique challenges of doing business in Africa. Our solutions are built from the ground up for this market.",
    },
    {
        icon: "⚡",
        title: "Reliability Always",
        description:
            "Businesses depend on us. We engineer for 99.9% uptime and build systems that work even when conditions aren't perfect.",
    },
    {
        icon: "📈",
        title: "Growth-Oriented",
        description:
            "We don't just solve today's problems. We build systems that scale with your business as it grows.",
    },
    {
        icon: "🔒",
        title: "Trust & Security",
        description:
            "Your data is sacred. We implement enterprise-grade security and maintain strict data privacy standards.",
    },
    {
        icon: "💡",
        title: "Continuous Innovation",
        description:
            "Technology evolves rapidly. We stay ahead of the curve to ensure our clients always have access to the best solutions.",
    },
];

const MILESTONES = [
    {
        year: "2025",
        title: "The Beginning",
        description:
            "LZJ ESOLEEN LTD was founded with a mission to digitize African business operations.",
    },
    {
        year: "2025",
        title: "RMS Launch",
        description:
            "Our flagship Restaurant Management System launched, serving our first clients in Warri and all over Nigeria.",
    },
    {
        year: "2026",
        title: "Rapid Growth",
        description:
            "Expanded to serve over 2,000 restaurants across Nigeria with 99.9% system uptime.",
    },
    {
        year: "2026",
        title: "New Horizons",
        description:
            "Beginning development of additional business solutions — Inventory, HR, and CRM systems.",
    },
];

const STATS = [
    { value: "2,000+", label: "Restaurants Served" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50,000+", label: "Orders Processed Daily" },
    { value: "24/7", label: "Support Available" },
];

/* ============================================================
   TEAM SECTION DATA - Comment out if not needed
   ============================================================ */

/* ============================================================ */

const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Hero animation
            gsap.fromTo(
                ".about-hero-content",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            );

            // Stats animation
            const stats = gsap.utils.toArray(".stat-item") as HTMLElement[];
            gsap.fromTo(
                stats,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".stats-section",
                        start: "top 80%",
                    },
                },
            );

            // Values animation
            const values = gsap.utils.toArray(".value-card") as HTMLElement[];
            gsap.fromTo(
                values,
                { y: 40, opacity: 0 },
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

            // Timeline animation
            const milestones = gsap.utils.toArray(
                ".milestone-item",
            ) as HTMLElement[];
            gsap.fromTo(
                milestones,
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top 80%",
                    },
                },
            );

            // Team animation (if section exists)
            const teamCards = gsap.utils.toArray(".team-card") as HTMLElement[];
            if (teamCards.length > 0) {
                gsap.fromTo(
                    teamCards,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".team-section",
                            start: "top 80%",
                        },
                    },
                );
            }
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F8F8F8]">
            {/* Hero Section */}
            <section className="bg-[#0B0D13] pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#F7C74B] blur-3xl" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-[#F7C74B] blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 about-hero-content">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                            <span className="text-[#F7C74B] text-sm font-medium">
                                Our Story
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                            Building the Future of{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                African Business
                            </span>
                        </h1>

                        <p className="text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
                            We&apos;re a team of engineers, designers,
                            marketers, and analysts united by a single mission:
                            to transform how businesses operate across Africa
                            through intelligent, reliable software.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white stats-section -mt-12 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map(stat => (
                            <div
                                key={stat.label}
                                className="stat-item text-center p-6 rounded-2xl bg-[#F8F8F8] border border-gray-100"
                            >
                                <p
                                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent mb-2"
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

            {/* Mission Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                                <span className="text-[#0B0D13] text-sm font-medium">
                                    Our Mission
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-6">
                                Empowering African Businesses with{" "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                    }}
                                >
                                    World-Class Technology
                                </span>
                            </h2>

                            <div className="space-y-4 text-[#64748B] leading-relaxed">
                                <p>
                                    Across Africa, millions of businesses still
                                    rely on manual processes, scattered
                                    spreadsheets, and disconnected tools to
                                    manage daily operations. This isn&apos;t
                                    just inefficient — it&apos;s holding back
                                    growth, limiting visibility, and creating
                                    unnecessary stress for business owners and
                                    their teams.
                                </p>
                                <p>
                                    At LZJ ESOLEEN, we believe African
                                    businesses deserve better. We&apos;re
                                    building a comprehensive suite of
                                    intelligent software solutions designed
                                    specifically for the unique challenges and
                                    opportunities of operating in Africa.
                                </p>
                                <p>
                                    Our approach is simple: create software
                                    that&apos;s powerful enough to handle
                                    complex operations, yet intuitive enough
                                    that anyone can use it. Software that works
                                    reliably even when infrastructure isn&apos;t
                                    perfect. Software that grows with your
                                    business and pays for itself many times
                                    over.
                                </p>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="relative">
                            <div className="bg-[#0B0D13] rounded-2xl p-8 relative overflow-hidden">
                                {/* Decorative Elements */}
                                <div
                                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-[#F7C74B] flex items-center justify-center">
                                            <span className="text-[#0B0D13] font-bold text-2xl">
                                                LZJ
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-[#F8F8F8] font-bold text-xl">
                                                ESOLEEN LTD
                                            </h3>
                                            <p className="text-[#64748B] text-sm">
                                                Est. 2025 • Warri, Nigeria
                                            </p>
                                        </div>
                                    </div>

                                    <blockquote className="text-[#F8F8F8] text-lg leading-relaxed mb-6 italic">
                                        &quot;We&apos;re not just building
                                        software. We&apos;re building the
                                        infrastructure that will power the next
                                        generation of African businesses.&quot;
                                    </blockquote>

                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Engineering",
                                            "Design",
                                            "Analytics",
                                            "Growth",
                                        ].map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 rounded-full bg-white/10 text-[#F8F8F8] text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 bg-white values-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                            <span className="text-[#0B0D13] text-sm font-medium">
                                Our Values
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">
                            These principles guide every decision we make, from
                            product design to customer support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CORE_VALUES.map(value => (
                            <div
                                key={value.title}
                                className="value-card bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#F7C74B]/30 hover:shadow-lg transition-all"
                            >
                                <span className="text-4xl mb-4 block">
                                    {value.icon}
                                </span>
                                <h3 className="text-xl font-bold text-[#0B0D13] mb-2">
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

            {/* Timeline Section */}
            <section className="py-20 px-6 timeline-section">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                            <span className="text-[#0B0D13] text-sm font-medium">
                                Our Journey
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                            From Vision to Reality
                        </h2>
                        <p className="text-[#64748B]">
                            A young company with big ambitions and rapid
                            progress.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#F7C74B] via-[#F7C74B]/50 to-transparent"></div>

                        <div className="space-y-8">
                            {MILESTONES.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="milestone-item flex gap-6"
                                >
                                    {/* Year Marker */}
                                    <div className="relative">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold text-sm">
                                                {milestone.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                        <h3 className="text-lg font-bold text-[#0B0D13] mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-[#64748B] text-sm leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <TeamMembersWithNames /> */}
            <TeamMembersOnly />
            {/* ============================================================
               ALTERNATIVE: TEAM SECTION WITHOUT PERSONAL DETAILS
               Uncomment this section if you want to hide individual names
               ============================================================ */}

            {/*  ============================================================ */}

            {/* Why We Exist Section */}
            <section className="py-20 px-6 bg-[#0B0D13]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-6">
                                Why We Exist
                            </h2>
                            <div className="space-y-4 text-[#64748B] leading-relaxed">
                                <p>
                                    Africa is home to some of the world&apos;s
                                    most resilient and innovative entrepreneurs.
                                    Yet too many are held back by outdated tools
                                    and manual processes that drain time and
                                    energy that could be spent growing their
                                    businesses.
                                </p>
                                <p>
                                    We started LZJ ESOLEEN because we saw this
                                    gap firsthand. Restaurants managing orders
                                    on paper. Retail stores tracking inventory
                                    in notebooks. Service businesses struggling
                                    to maintain customer records across
                                    scattered WhatsApp chats.
                                </p>
                                <p>
                                    There had to be a better way. So we built
                                    one.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    stat: "₦2B+",
                                    label: "Transactions Processed",
                                },
                                { stat: "15+", label: "States Covered" },
                                { stat: "40%", label: "Avg. Efficiency Gain" },
                                { stat: "4.8/5", label: "Customer Rating" },
                            ].map(item => (
                                <div
                                    key={item.label}
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                                >
                                    <p
                                        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent mb-1"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        {item.stat}
                                    </p>
                                    <p className="text-[#64748B] text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                                <span className="text-[#0B0D13] text-sm font-medium">
                                    Join Our Team
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                                Help Us Build the Future
                            </h2>
                            <p className="text-[#64748B] max-w-2xl mx-auto mb-8 leading-relaxed">
                                We&apos;re always looking for talented
                                individuals who share our passion for
                                transforming African business. If you&apos;re
                                excited about building products that make a real
                                difference, we&apos;d love to hear from you.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                                {[
                                    "Engineering",
                                    "Design",
                                    "Product",
                                    "Marketing",
                                    "Sales",
                                    "Support",
                                ].map(dept => (
                                    <span
                                        key={dept}
                                        className="px-4 py-2 rounded-full bg-[#F8F8F8] text-[#64748B] text-sm border border-gray-200"
                                    >
                                        {dept}
                                    </span>
                                ))}
                            </div>

                            <Link href="/careers">
                                <button
                                    className="px-8 py-4 rounded-[0.625rem] text-[#0B0D13] font-semibold text-lg"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    View Open Positions
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-[#0B0D13]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re looking to transform your business
                        operations or partner with us, we&apos;re here to help.
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
                                Get Started
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-4 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#F7C74B] font-semibold text-lg hover:bg-[#F7C74B]/10 transition-colors">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
