import React from "react";

const TermsAndConditions = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "services", title: "Our Services" },
        { id: "rms-terms", title: "RMS Platform Terms" },
        { id: "affiliate-program", title: "Affiliate Program" },
        { id: "user-obligations", title: "User Obligations" },
        { id: "intellectual-property", title: "Intellectual Property" },
        { id: "limitation-liability", title: "Limitation of Liability" },
        { id: "termination", title: "Termination" },
        { id: "governing-law", title: "Governing Law" },
        { id: "changes", title: "Changes to Terms" },
        { id: "contact", title: "Contact Us" },
    ];

    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            {/* Hero Section */}
            <section className="bg-[#0B0D13] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
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
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span className="text-[#F7C74B] text-sm font-medium">
                            Legal Document
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#F8F8F8] mb-4">
                        Terms and Conditions
                    </h1>

                    <p className="text-[#64748B] text-lg mb-6">
                        Please read these terms carefully before using our
                        services.
                    </p>

                    <div className="flex items-center justify-center gap-6 text-sm text-[#64748B]">
                        <span className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            Last Updated: March 13, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
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
                            15 min read
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Table of Contents - Sticky Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-[#0B0D13] font-semibold mb-4 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-[#F7C74B]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        />
                                    </svg>
                                    Table of Contents
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item, index) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="flex items-center gap-3 py-2 px-3 rounded-[0.625rem] text-sm text-[#64748B] hover:bg-[#F7C74B]/10 hover:text-[#0B0D13] transition-colors group"
                                        >
                                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium bg-gray-100 group-hover:bg-[#F7C74B] group-hover:text-[#0B0D13] transition-colors">
                                                {index + 1}
                                            </span>
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>

                                {/* Quick Contact */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-xs text-[#64748B] mb-3">
                                        Have questions?
                                    </p>
                                    <a
                                        href="mailto:info@lzjesoleen.com"
                                        className="flex items-center gap-2 text-sm font-medium text-[#0B0D13] hover:text-[#F7C74B] transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
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
                                        info@lzjesoleen.com
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <main className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                                {/* Introduction */}
                                <section
                                    id="introduction"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                1
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Introduction
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Welcome to LZJ ESOLEEN LTD
                                            (&quot;Company&quot;,
                                            &quot;we&quot;, &quot;us&quot;, or
                                            &quot;our&quot;). These Terms and
                                            Conditions (&quot;Terms&quot;)
                                            govern your access to and use of our
                                            services, including our Restaurant
                                            Management System (RMS) platform and
                                            Affiliate Program.
                                        </p>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            By accessing or using any of our
                                            services, you agree to be bound by
                                            these Terms. If you disagree with
                                            any part of these Terms, you may not
                                            access our services.
                                        </p>
                                        <div className="bg-[#F7C74B]/10 border-l-4 border-[#F7C74B] p-4 rounded-r-[0.625rem] my-6">
                                            <p className="text-[#0B0D13] font-medium text-sm">
                                                <strong>Important:</strong>{" "}
                                                Please read these Terms
                                                carefully. They contain
                                                important information about your
                                                legal rights, remedies, and
                                                obligations.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Our Services */}
                                <section
                                    id="services"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                2
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Our Services
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            LZJ ESOLEEN LTD operates two primary
                                            service offerings:
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            <div className="bg-gray-50 rounded-[0.625rem] p-5 border border-gray-100">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-[0.625rem] bg-[#0B0D13] flex items-center justify-center">
                                                        <span className="text-[#F7C74B] font-bold text-xs">
                                                            RMS
                                                        </span>
                                                    </div>
                                                    <h4 className="font-semibold text-[#0B0D13]">
                                                        Restaurant Management
                                                        System
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-[#64748B]">
                                                    A comprehensive SaaS
                                                    platform for restaurant
                                                    owners to manage
                                                    multi-branch operations,
                                                    real-time ordering, and
                                                    financial analytics.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 rounded-[0.625rem] p-5 border border-gray-100">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-[0.625rem] bg-[#0B0D13] flex items-center justify-center">
                                                        <svg
                                                            className="w-4 h-4 text-[#F7C74B]"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-[#0B0D13]">
                                                        Affiliate Program
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-[#64748B]">
                                                    A referral program allowing
                                                    partners to earn commissions
                                                    by referring new customers
                                                    to our services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* RMS Platform Terms */}
                                <section
                                    id="rms-terms"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                3
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            RMS Platform Terms
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            3.1 Account Registration
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            To access the RMS platform, you must
                                            create an account by providing
                                            accurate, complete, and current
                                            information. You are responsible for
                                            maintaining the confidentiality of
                                            your account credentials and for all
                                            activities under your account.
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            3.2 Subscription & Billing
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Access to the RMS platform requires
                                            an active subscription. Subscription
                                            fees are billed in advance on a
                                            monthly or annual basis. All fees
                                            are non-refundable unless otherwise
                                            stated in writing.
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            3.3 Acceptable Use
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            You agree to use the RMS platform
                                            only for lawful purposes and in
                                            accordance with these Terms. You
                                            shall not use the platform to:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            {[
                                                "Violate any applicable laws or regulations",
                                                "Infringe upon the rights of others",
                                                "Transmit malicious code or interfere with platform operations",
                                                "Attempt to gain unauthorized access to any systems",
                                                "Use the service for any fraudulent or illegal activity",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-[#64748B]"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
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
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* Affiliate Program */}
                                <section
                                    id="affiliate-program"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                4
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Affiliate Program
                                        </h2>
                                    </div>

                                    <div className="bg-[#0B0D13] rounded-2xl p-6 mb-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <svg
                                                className="w-5 h-5 text-[#F7C74B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                            <span className="text-[#F7C74B] font-semibold">
                                                Please Read Carefully Before
                                                Joining
                                            </span>
                                        </div>
                                        <p className="text-[#64748B] text-sm">
                                            The following terms apply
                                            specifically to participants in our
                                            Affiliate Program. By joining, you
                                            acknowledge and agree to these
                                            conditions.
                                        </p>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            4.1 Payout Requirements
                                        </h3>
                                        <div className="bg-[#F7C74B]/10 border border-[#F7C74B]/30 rounded-[0.625rem] p-5 mb-6">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#F7C74B] flex items-center justify-center shrink-0">
                                                    <svg
                                                        className="w-4 h-4 text-[#0B0D13]"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-[#0B0D13] mb-1">
                                                        Minimum Payout Threshold
                                                    </p>
                                                    <p className="text-[#64748B] text-sm">
                                                        Minimum payout must be
                                                        at least{" "}
                                                        <strong className="text-[#0B0D13]">
                                                            3 conversions
                                                        </strong>
                                                        . A conversion is
                                                        defined as a referred
                                                        customer who signs up
                                                        through your unique
                                                        affiliate link and
                                                        successfully subscribes
                                                        to a paid plan.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            4.2 Prohibited Activities
                                        </h3>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-[0.625rem]">
                                                <svg
                                                    className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                                    />
                                                </svg>
                                                <div>
                                                    <p className="font-semibold text-red-700 mb-1">
                                                        Self-Referral
                                                        Prohibition
                                                    </p>
                                                    <p className="text-red-600 text-sm">
                                                        Self-referral is
                                                        strictly forbidden and
                                                        will result in your
                                                        account being
                                                        permanently banned. This
                                                        includes referring
                                                        yourself, family members
                                                        residing at the same
                                                        address, or any accounts
                                                        you control.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-[0.625rem]">
                                                <svg
                                                    className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                                    />
                                                </svg>
                                                <div>
                                                    <p className="font-semibold text-red-700 mb-1">
                                                        Misrepresentation
                                                    </p>
                                                    <p className="text-red-600 text-sm">
                                                        The Affiliate will never
                                                        represent themselves,
                                                        LZJ ESOLEEN LTD, or
                                                        their relationship with
                                                        LZJ ESOLEEN LTD in a
                                                        false or misleading way.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            4.3 Educational Requirements
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            The affiliate must ensure they
                                            understand our services by going
                                            through our educational resources
                                            thoroughly before embarking in the
                                            field. Proper understanding of our
                                            products is essential for accurate
                                            representation to potential
                                            customers.
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            4.4 Conversion Tracking
                                        </h3>
                                        <div className="bg-gray-50 border border-gray-200 rounded-[0.625rem] p-5 mb-6">
                                            <div className="flex items-start gap-3">
                                                <svg
                                                    className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-[#64748B] text-sm">
                                                    <strong className="text-[#0B0D13]">
                                                        Important:
                                                    </strong>{" "}
                                                    We will not manually add
                                                    customers to your affiliate
                                                    account. Only customers that
                                                    sign up through your unique
                                                    affiliate link and
                                                    successfully subscribe will
                                                    be counted toward your
                                                    conversions.
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            4.5 KYC & Due Diligence
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We reserve the right to request
                                            proper due diligence and Know Your
                                            Customer (KYC) documentation at any
                                            time before issuing payments. This
                                            may include but is not limited to:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            {[
                                                "Government-issued identification",
                                                "Proof of address",
                                                "Tax identification numbers",
                                                "Bank account verification",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-[#64748B]"
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
                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* User Obligations */}
                                <section
                                    id="user-obligations"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                5
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            User Obligations
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            As a user of our services, you agree
                                            to:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            {[
                                                "Provide accurate and truthful information during registration",
                                                "Maintain the security of your account credentials",
                                                "Notify us immediately of any unauthorized access",
                                                "Comply with all applicable laws and regulations",
                                                "Use our services only for their intended purpose",
                                                "Respect the intellectual property rights of LZJ ESOLEEN LTD",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-[#64748B]"
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
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* Intellectual Property */}
                                <section
                                    id="intellectual-property"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                6
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Intellectual Property
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            All content, trademarks, logos, and
                                            intellectual property associated
                                            with LZJ ESOLEEN LTD and its
                                            services, including the RMS
                                            platform, are owned exclusively by
                                            LZJ ESOLEEN LTD or its licensors.
                                        </p>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            You may not copy, modify,
                                            distribute, sell, or lease any part
                                            of our services or included
                                            software, nor may you reverse
                                            engineer or attempt to extract the
                                            source code of that software.
                                        </p>
                                    </div>
                                </section>

                                {/* Limitation of Liability */}
                                <section
                                    id="limitation-liability"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                7
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Limitation of Liability
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            To the maximum extent permitted by
                                            law, LZJ ESOLEEN LTD shall not be
                                            liable for any indirect, incidental,
                                            special, consequential, or punitive
                                            damages, or any loss of profits or
                                            revenues, whether incurred directly
                                            or indirectly.
                                        </p>
                                        <div className="bg-gray-50 border border-gray-200 rounded-[0.625rem] p-5 my-6">
                                            <p className="text-[#64748B] text-sm">
                                                Our total liability for any
                                                claims arising from or related
                                                to these Terms or our services
                                                shall not exceed the amount paid
                                                by you to LZJ ESOLEEN LTD in the
                                                twelve (12) months preceding the
                                                claim.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Termination */}
                                <section
                                    id="termination"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                8
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Termination
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We may terminate or suspend your
                                            access to our services immediately,
                                            without prior notice or liability,
                                            for any reason, including if you
                                            breach these Terms.
                                        </p>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Upon termination, your right to use
                                            the services will cease immediately.
                                            All provisions of these Terms which
                                            by their nature should survive
                                            termination shall survive.
                                        </p>
                                    </div>
                                </section>

                                {/* Governing Law */}
                                <section
                                    id="governing-law"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                9
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Governing Law
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            These Terms shall be governed by and
                                            construed in accordance with the
                                            laws of the jurisdiction in which
                                            LZJ ESOLEEN LTD is registered,
                                            without regard to its conflict of
                                            law provisions.
                                        </p>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Any disputes arising from these
                                            Terms or your use of our services
                                            shall be resolved through binding
                                            arbitration in accordance with
                                            applicable arbitration rules.
                                        </p>
                                    </div>
                                </section>

                                {/* Changes to Terms */}
                                <section
                                    id="changes"
                                    className="mb-12 scroll-mt-24"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                10
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Changes to Terms
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <div className="bg-[#F7C74B]/10 border-l-4 border-[#F7C74B] p-4 rounded-r-[0.625rem] mb-6">
                                            <p className="text-[#0B0D13] font-medium text-sm">
                                                <strong>
                                                    We reserve the right to
                                                    change these Terms at any
                                                    time.
                                                </strong>{" "}
                                                We will notify users of any
                                                material changes via email or
                                                through our services. Your
                                                continued use of our services
                                                after such changes constitutes
                                                acceptance of the new Terms.
                                            </p>
                                        </div>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            It is your responsibility to review
                                            these Terms periodically. We
                                            encourage you to check this page
                                            regularly for any updates.
                                        </p>
                                    </div>
                                </section>

                                {/* Contact Us */}
                                <section id="contact" className="scroll-mt-24">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold">
                                                11
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Contact Us
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            If you have any questions regarding
                                            these Terms and Conditions or our
                                            Affiliate Program, please don&apos;t
                                            hesitate to reach out.
                                        </p>

                                        <div className="bg-[#0B0D13] rounded-2xl p-6">
                                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-12 h-12 rounded-[0.625rem] flex items-center justify-center"
                                                        style={{
                                                            background:
                                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-6 h-6 text-[#0B0D13]"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-[#64748B] text-sm">
                                                            Email us at
                                                        </p>
                                                        <a
                                                            href="mailto:info@lzjesoleen.com"
                                                            className="text-[#F8F8F8] font-semibold hover:text-[#F7C74B] transition-colors"
                                                        >
                                                            info@lzjesoleen.com
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="hidden md:block w-px h-12 bg-white/10"></div>

                                                <div>
                                                    <p className="text-[#64748B] text-sm mb-1">
                                                        Company
                                                    </p>
                                                    <p className="text-[#F8F8F8] font-semibold">
                                                        LZJ ESOLEEN LTD
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
