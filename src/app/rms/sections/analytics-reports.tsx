import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnalyticsReports = () => {
    const metrics = [
        {
            label: "Today's Revenue",
            value: "₦847,500",
            change: "+12.5%",
            positive: true,
        },
        {
            label: "Orders Completed",
            value: "156",
            change: "+8.2%",
            positive: true,
        },
        {
            label: "Avg. Order Value",
            value: "₦5,432",
            change: "+3.1%",
            positive: true,
        },
        {
            label: "Tables Turned",
            value: "42",
            change: "-2.4%",
            positive: false,
        },
    ];

    const reportFeatures = [
        {
            title: "Daily Financial Summary",
            description:
                "Automatic end-of-day reports with revenue breakdown, payment methods, and transaction logs.",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            title: "Revenue Analytics",
            description:
                "Track sales trends, peak hours, and best-selling items with interactive charts and graphs.",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
        },
        {
            title: "Staff Performance",
            description:
                "Monitor individual and team metrics including orders handled, tips earned, and shift summaries.",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Export & Share",
            description:
                "Download reports as PDF or Excel, schedule automated email delivery to stakeholders.",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                </svg>
            ),
        },
    ];

    const topItems = [
        { rank: 1, name: "Peppered Gizzard", orders: 48, revenue: "₦120,000" },
        {
            rank: 2,
            name: "Jollof Rice Special",
            orders: 42,
            revenue: "₦105,000",
        },
        { rank: 3, name: "Grilled Chicken", orders: 38, revenue: "₦95,000" },
        { rank: 4, name: "Pepper Soup", orders: 31, revenue: "₦62,000" },
        { rank: 5, name: "Chapman Cocktail", orders: 29, revenue: "₦43,500" },
    ];

    return (
        <section id="analytics" className="bg-[#0B0D13] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F7C74B] animate-pulse"></span>
                        <span className="text-[#F7C74B] text-sm font-medium">
                            Financial Intelligence
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8F8F8] leading-tight mb-6">
                        Numbers That Drive
                        <span
                            className="bg-clip-text text-transparent ml-3"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Decisions
                        </span>
                    </h2>

                    <p className="text-lg text-[#64748B] leading-relaxed">
                        Transform raw data into actionable insights. From daily
                        summaries to deep-dive analytics, understand your
                        business like never before.
                    </p>
                </div>

                {/* Live Metrics Bar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {metrics.map(metric => (
                        <div
                            key={metric.label}
                            className="bg-[#1A1D27] rounded-[0.625rem] p-5 border border-white/5"
                        >
                            <p className="text-[#64748B] text-sm mb-2">
                                {metric.label}
                            </p>
                            <div className="flex items-end justify-between">
                                <span
                                    className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    {metric.value}
                                </span>
                                <span
                                    className={`text-sm font-medium px-2 py-1 rounded ${
                                        metric.positive
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                    }`}
                                >
                                    {metric.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left: Screenshots (3 columns) */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Daily Financial Report Screenshot */}
                        <div className="bg-[#1A1D27] rounded-2xl p-2 shadow-xl border border-white/5">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></span>
                                    </div>
                                    <span className="text-white/30 text-xs ml-2">
                                        Daily Financial Report
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded bg-[#F7C74B]/20 text-[#F7C74B] text-xs font-medium">
                                        January 9, 2026
                                    </span>
                                </div>
                            </div>

                            <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-xl relative overflow-hidden">
                                <Image
                                    src={
                                        "/assets/images/rms/daily-financial-report.png"
                                    }
                                    alt="Daily Financial Report Screenshot"
                                    fill
                                    className="rounded-b-xl object-cover"
                                />
                                {/* <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-[#64748B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[#64748B] font-medium text-lg">
                                        Screenshot: Daily Financial Report
                                    </p>
                                    <p className="text-[#64748B]/60 text-sm mt-1">
                                        Revenue breakdown, payments &
                                        transactions
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        {/* Dashboard Overview Screenshot */}
                        <div className="bg-[#1A1D27] rounded-2xl p-2 shadow-xl border border-white/5">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></span>
                                    </div>
                                    <span className="text-white/30 text-xs ml-2">
                                        Dashboard Overview
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-green-400 text-xs font-medium">
                                        Live
                                    </span>
                                </div>
                            </div>

                            <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-xl relative overflow-hidden">
                                <Image
                                    src={
                                        "/assets/images/rms/dashboard-overview.png"
                                    }
                                    alt="Dashboard Overview Screenshot"
                                    fill
                                    className="rounded-b-xl object-contain"
                                />
                                {/* <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-[#64748B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[#64748B] font-medium text-lg">
                                        Screenshot: Dashboard Overview
                                    </p>
                                    <p className="text-[#64748B]/60 text-sm mt-1">
                                        Real-time metrics, charts & activity
                                        feed
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right: Top Items + Features (2 columns) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Top Selling Items */}
                        <div className="bg-[#1A1D27] rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-[#F8F8F8]">
                                    Top Selling Items
                                </h3>
                                <span className="text-[#64748B] text-sm">
                                    Today
                                </span>
                            </div>

                            <div className="space-y-3">
                                {topItems.map(item => (
                                    <div
                                        key={item.rank}
                                        className="flex items-center gap-4 p-3 rounded-[0.625rem] bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                                item.rank === 1
                                                    ? "bg-[#F7C74B] text-[#0B0D13]"
                                                    : item.rank === 2
                                                      ? "bg-gray-300 text-[#0B0D13]"
                                                      : item.rank === 3
                                                        ? "bg-amber-600 text-white"
                                                        : "bg-white/10 text-[#64748B]"
                                            }`}
                                        >
                                            {item.rank}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[#F8F8F8] font-medium truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-[#64748B] text-sm">
                                                {item.orders} orders
                                            </p>
                                        </div>
                                        <span
                                            className="text-sm font-semibold bg-clip-text text-transparent"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            {item.revenue}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Report Features */}
                        <div className="space-y-3">
                            {reportFeatures.map(feature => (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-4 p-4 rounded-[0.625rem] bg-[#1A1D27] border border-white/5 hover:border-[#F7C74B]/30 transition-colors"
                                >
                                    <div
                                        className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center shrink-0"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        <span className="text-[#0B0D13]">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#F8F8F8] mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[#64748B] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[#1A1D27] border border-white/5">
                        <div className="text-left">
                            <h3 className="text-[#F8F8F8] font-semibold text-lg">
                                Want to see your numbers?
                            </h3>
                            <p className="text-[#64748B] text-sm">
                                Book a demo and we&apos;ll show you insights
                                from a real restaurant.
                            </p>
                        </div>
                        <Link
                            href={"/get-started"}
                            className="px-6 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold whitespace-nowrap"
                            style={{
                                padding: "0.75rem 1.5rem",
                                background:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Schedule Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsReports;
