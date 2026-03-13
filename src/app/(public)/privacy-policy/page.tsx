import React from "react";

const PrivacyPolicy = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "information-collected", title: "Information We Collect" },
        { id: "how-we-use", title: "How We Use Your Information" },
        { id: "data-sharing", title: "Data Sharing & Disclosure" },
        { id: "data-security", title: "Data Security" },
        { id: "data-retention", title: "Data Retention" },
        { id: "your-rights", title: "Your Rights" },
        { id: "cookies", title: "Cookies & Tracking" },
        { id: "third-party", title: "Third-Party Services" },
        { id: "children", title: "Children's Privacy" },
        { id: "changes", title: "Changes to Policy" },
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
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        <span className="text-[#F7C74B] text-sm font-medium">
                            Legal Document
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#F8F8F8] mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-[#64748B] text-lg mb-6">
                        Your privacy is important to us. Learn how we collect,
                        use, and protect your data.
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
                            12 min read
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
                            <div className="sticky top-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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
                                        Privacy concerns?
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
                                            className="w-10 h-10 rounded-2xl flex items-center justify-center"
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
                                            LZJ ESOLEEN LTD
                                            (&quot;Company&quot;,
                                            &quot;we&quot;, &quot;us&quot;, or
                                            &quot;our&quot;) is committed to
                                            protecting your privacy. This
                                            Privacy Policy explains how we
                                            collect, use, disclose, and
                                            safeguard your information when you
                                            use our services, including the
                                            Restaurant Management System (RMS)
                                            platform and our Affiliate Program.
                                        </p>
                                        <div className="bg-[#F7C74B]/10 border-l-4 border-[#F7C74B] p-4 rounded-r-[0.625rem] my-6">
                                            <p className="text-[#0B0D13] font-medium text-sm">
                                                <strong>Your Consent:</strong>{" "}
                                                By using our services, you
                                                consent to the collection and
                                                use of your information as
                                                described in this Privacy
                                                Policy.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Information We Collect */}
                                <section
                                    id="information-collected"
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
                                            Information We Collect
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            2.1 Personal Information
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We may collect personally
                                            identifiable information that you
                                            voluntarily provide, including:
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            {[
                                                {
                                                    icon: "👤",
                                                    title: "Identity Data",
                                                    items: [
                                                        "Full name",
                                                        "Username",
                                                        "Date of birth",
                                                    ],
                                                },
                                                {
                                                    icon: "📧",
                                                    title: "Contact Data",
                                                    items: [
                                                        "Email address",
                                                        "Phone number",
                                                        "Billing address",
                                                    ],
                                                },
                                                {
                                                    icon: "💳",
                                                    title: "Financial Data",
                                                    items: [
                                                        "Payment card details",
                                                        "Bank account info",
                                                        "Transaction history",
                                                    ],
                                                },
                                                {
                                                    icon: "🏢",
                                                    title: "Business Data",
                                                    items: [
                                                        "Company name",
                                                        "Restaurant details",
                                                        "Branch locations",
                                                    ],
                                                },
                                            ].map(category => (
                                                <div
                                                    key={category.title}
                                                    className="bg-gray-50 rounded-[0.625rem] p-4 border border-gray-100"
                                                >
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="text-xl">
                                                            {category.icon}
                                                        </span>
                                                        <h4 className="font-semibold text-[#0B0D13]">
                                                            {category.title}
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {category.items.map(
                                                            item => (
                                                                <li
                                                                    key={item}
                                                                    className="text-sm text-[#64748B] flex items-center gap-2"
                                                                >
                                                                    <span className="w-1 h-1 rounded-full bg-[#F7C74B]"></span>
                                                                    {item}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-semibold text-[#0B0D13] mt-6 mb-3">
                                            2.2 Automatically Collected
                                            Information
                                        </h3>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            When you access our services, we
                                            automatically collect certain
                                            information, including:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            {[
                                                "Device information (type, operating system, unique identifiers)",
                                                "IP address and geographic location",
                                                "Browser type and version",
                                                "Pages visited and time spent on our services",
                                                "Referring website or application",
                                                "Clickstream data and usage patterns",
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
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* How We Use Your Information */}
                                <section
                                    id="how-we-use"
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
                                            How We Use Your Information
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            We use the information we collect
                                            for various purposes, including:
                                        </p>

                                        <div className="space-y-4 mb-6">
                                            {[
                                                {
                                                    title: "Service Delivery",
                                                    description:
                                                        "To provide, maintain, and improve our RMS platform and Affiliate Program.",
                                                    icon: (
                                                        <svg
                                                            className="w-5 h-5"
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
                                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                            />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Account Management",
                                                    description:
                                                        "To create and manage your account, process transactions, and send administrative communications.",
                                                    icon: (
                                                        <svg
                                                            className="w-5 h-5"
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
                                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                            />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Communications",
                                                    description:
                                                        "To send you updates, marketing materials, and promotional offers (with your consent).",
                                                    icon: (
                                                        <svg
                                                            className="w-5 h-5"
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
                                                    ),
                                                },
                                                {
                                                    title: "Analytics & Improvement",
                                                    description:
                                                        "To analyze usage patterns, troubleshoot issues, and enhance user experience.",
                                                    icon: (
                                                        <svg
                                                            className="w-5 h-5"
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
                                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                            />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Legal Compliance",
                                                    description:
                                                        "To comply with legal obligations, resolve disputes, and enforce our agreements.",
                                                    icon: (
                                                        <svg
                                                            className="w-5 h-5"
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
                                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                            />
                                                        </svg>
                                                    ),
                                                },
                                            ].map(item => (
                                                <div
                                                    key={item.title}
                                                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-[0.625rem] border border-gray-100"
                                                >
                                                    <div
                                                        className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center shrink-0"
                                                        style={{
                                                            background:
                                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                        }}
                                                    >
                                                        <span className="text-[#0B0D13]">
                                                            {item.icon}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-[#0B0D13] mb-1">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-sm text-[#64748B]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing & Disclosure */}
                                <section
                                    id="data-sharing"
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
                                            Data Sharing & Disclosure
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We do not sell your personal
                                            information. We may share your data
                                            in the following circumstances:
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            {[
                                                {
                                                    title: "Service Providers",
                                                    description:
                                                        "With trusted third-party vendors who assist us in operating our services (payment processors, hosting providers, analytics services).",
                                                },
                                                {
                                                    title: "Legal Requirements",
                                                    description:
                                                        "When required by law, court order, or governmental authority.",
                                                },
                                                {
                                                    title: "Business Transfers",
                                                    description:
                                                        "In connection with a merger, acquisition, or sale of assets.",
                                                },
                                                {
                                                    title: "With Your Consent",
                                                    description:
                                                        "When you have given us explicit permission to share your information.",
                                                },
                                            ].map(item => (
                                                <div
                                                    key={item.title}
                                                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-[0.625rem]"
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
                                                    <div>
                                                        <h4 className="font-semibold text-[#0B0D13] mb-1">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-sm text-[#64748B]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section
                                    id="data-security"
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
                                            Data Security
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            We implement robust security
                                            measures to protect your personal
                                            information:
                                        </p>

                                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                                            {[
                                                {
                                                    icon: "🔐",
                                                    title: "Encryption",
                                                    description:
                                                        "SSL/TLS encryption for data in transit",
                                                },
                                                {
                                                    icon: "🛡️",
                                                    title: "Access Control",
                                                    description:
                                                        "Role-based access restrictions",
                                                },
                                                {
                                                    icon: "🔒",
                                                    title: "Secure Storage",
                                                    description:
                                                        "Encrypted data at rest",
                                                },
                                            ].map(item => (
                                                <div
                                                    key={item.title}
                                                    className="bg-[#0B0D13] rounded-[0.625rem] p-5 text-center"
                                                >
                                                    <span className="text-3xl mb-3 block">
                                                        {item.icon}
                                                    </span>
                                                    <h4 className="font-semibold text-[#F8F8F8] mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm text-[#64748B]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-gray-50 border border-gray-200 rounded-[0.625rem] p-5">
                                            <p className="text-[#64748B] text-sm">
                                                <strong className="text-[#0B0D13]">
                                                    Note:
                                                </strong>{" "}
                                                While we strive to use
                                                commercially acceptable means to
                                                protect your personal
                                                information, no method of
                                                transmission over the Internet
                                                or electronic storage is 100%
                                                secure. We cannot guarantee
                                                absolute security.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Retention */}
                                <section
                                    id="data-retention"
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
                                            Data Retention
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We retain your personal information
                                            only for as long as necessary to
                                            fulfill the purposes outlined in
                                            this Privacy Policy, unless a longer
                                            retention period is required or
                                            permitted by law.
                                        </p>
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            When determining retention periods,
                                            we consider the amount, nature, and
                                            sensitivity of the information, the
                                            potential risk of harm from
                                            unauthorized use or disclosure, and
                                            applicable legal requirements.
                                        </p>
                                    </div>
                                </section>

                                {/* Your Rights */}
                                <section
                                    id="your-rights"
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
                                            Your Rights
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            Depending on your location, you may
                                            have the following rights regarding
                                            your personal information:
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            {[
                                                {
                                                    title: "Access",
                                                    description:
                                                        "Request a copy of your personal data",
                                                },
                                                {
                                                    title: "Rectification",
                                                    description:
                                                        "Request correction of inaccurate data",
                                                },
                                                {
                                                    title: "Erasure",
                                                    description:
                                                        "Request deletion of your personal data",
                                                },
                                                {
                                                    title: "Portability",
                                                    description:
                                                        "Receive your data in a portable format",
                                                },
                                                {
                                                    title: "Restriction",
                                                    description:
                                                        "Request limitation of data processing",
                                                },
                                                {
                                                    title: "Objection",
                                                    description:
                                                        "Object to certain processing activities",
                                                },
                                            ].map(right => (
                                                <div
                                                    key={right.title}
                                                    className="flex items-start gap-3 p-4 bg-[#F7C74B]/10 rounded-[0.625rem] border border-[#F7C74B]/20"
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
                                                    <div>
                                                        <h4 className="font-semibold text-[#0B0D13]">
                                                            {right.title}
                                                        </h4>
                                                        <p className="text-sm text-[#64748B]">
                                                            {right.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-[#64748B] leading-relaxed">
                                            To exercise any of these rights,
                                            please contact us at{" "}
                                            <a
                                                href="mailto:info@lzjesoleen.com"
                                                className="text-[#F7C74B] hover:underline"
                                            >
                                                info@lzjesoleen.com
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </section>

                                {/* Cookies & Tracking */}
                                <section
                                    id="cookies"
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
                                            Cookies & Tracking
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            We use cookies and similar tracking
                                            technologies to enhance your
                                            experience on our platform:
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            {[
                                                {
                                                    type: "Essential Cookies",
                                                    description:
                                                        "Required for basic site functionality and security.",
                                                },
                                                {
                                                    type: "Analytics Cookies",
                                                    description:
                                                        "Help us understand how visitors interact with our services.",
                                                },
                                                {
                                                    type: "Preference Cookies",
                                                    description:
                                                        "Remember your settings and preferences.",
                                                },
                                                {
                                                    type: "Marketing Cookies",
                                                    description:
                                                        "Used to deliver relevant advertisements (with consent).",
                                                },
                                            ].map(cookie => (
                                                <div
                                                    key={cookie.type}
                                                    className="flex items-start gap-3 p-3 border-l-4 border-[#F7C74B] bg-gray-50"
                                                >
                                                    <div>
                                                        <h4 className="font-semibold text-[#0B0D13]">
                                                            {cookie.type}
                                                        </h4>
                                                        <p className="text-sm text-[#64748B]">
                                                            {cookie.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-[#64748B] leading-relaxed">
                                            You can manage your cookie
                                            preferences through your browser
                                            settings. Note that disabling
                                            certain cookies may affect the
                                            functionality of our services.
                                        </p>
                                    </div>
                                </section>

                                {/* Third-Party Services */}
                                <section
                                    id="third-party"
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
                                            Third-Party Services
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Our services may contain links to
                                            third-party websites or integrate
                                            with third-party services. We are
                                            not responsible for the privacy
                                            practices of these external sites.
                                            We encourage you to review their
                                            privacy policies before providing
                                            any personal information.
                                        </p>
                                    </div>
                                </section>

                                {/* Children's Privacy */}
                                <section
                                    id="children"
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
                                            Children&apos;s Privacy
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-4">
                                            Our services are not intended for
                                            individuals under the age of 18. We
                                            do not knowingly collect personal
                                            information from children. If you
                                            believe we have collected
                                            information from a child, please
                                            contact us immediately at{" "}
                                            <a
                                                href="mailto:info@lzjesoleen.com"
                                                className="text-[#F7C74B] hover:underline"
                                            >
                                                info@lzjesoleen.com
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </section>

                                {/* Changes to Policy */}
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
                                                11
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Changes to This Policy
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <div className="bg-[#F7C74B]/10 border-l-4 border-[#F7C74B] p-4 rounded-r-[0.625rem] mb-6">
                                            <p className="text-[#0B0D13] font-medium text-sm">
                                                We may update this Privacy
                                                Policy from time to time. We
                                                will notify you of any changes
                                                by posting the new Privacy
                                                Policy on this page and updating
                                                the &quot;Last Updated&quot;
                                                date.
                                            </p>
                                        </div>
                                        <p className="text-[#64748B] leading-relaxed">
                                            We encourage you to review this
                                            Privacy Policy periodically for any
                                            changes. Changes are effective when
                                            they are posted on this page.
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
                                                12
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#0B0D13]">
                                            Contact Us
                                        </h2>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-[#64748B] leading-relaxed mb-6">
                                            If you have any questions or
                                            concerns about this Privacy Policy
                                            or our data practices, please
                                            contact us.
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

export default PrivacyPolicy;
