"use client";
import FloorPlanModal from "@/components/modals/floor-plan-modal";
import Image from "next/image";
import React, { useState } from "react";

const MultiBranchMap = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const branches = [
        {
            id: 1,
            name: "Victoria Island",
            location: "Lagos",
            status: "online",
            orders: 34,
            revenue: "₦285,000",
            tables: "18/24",
            active: true,
        },
        {
            id: 2,
            name: "Ikeja City Mall",
            location: "Lagos",
            status: "online",
            orders: 28,
            revenue: "₦198,500",
            tables: "12/20",
            active: false,
        },
        {
            id: 3,
            name: "Wuse Zone 5",
            location: "Abuja",
            status: "online",
            orders: 22,
            revenue: "₦156,000",
            tables: "9/16",
            active: false,
        },
        {
            id: 4,
            name: "Port Harcourt",
            location: "Rivers",
            status: "offline",
            orders: 0,
            revenue: "₦0",
            tables: "0/12",
            active: false,
        },
    ];

    const branchFeatures = [
        {
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
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                </svg>
            ),
            title: "Instant Branch Switching",
            description:
                "Jump between locations with a single click. No logout, no delays.",
        },
        {
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            title: "Comparative Analytics",
            description:
                "Compare performance across branches side-by-side in real-time.",
        },
        {
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
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                </svg>
            ),
            title: "Centralized Controls",
            description:
                "Manage menus, pricing, and settings across all branches from one place.",
        },
        {
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            ),
            title: "Branch Alerts",
            description:
                "Get notified when any branch needs attention — low stock, high wait times, or issues.",
        },
    ];

    return (
        <>
            <FloorPlanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <section id="branches" className="bg-[#F8F8F8] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                            <span className="text-[#0B0D13] text-sm font-medium">
                                Multi-Branch Control
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D13] leading-tight mb-6">
                            One Dashboard,
                            <span
                                className="bg-clip-text text-transparent ml-3"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                }}
                            >
                                Every Location
                            </span>
                        </h2>

                        <p className="text-lg text-[#64748B] leading-relaxed">
                            Whether you have 2 branches or 20, manage them all
                            from a single command center. Switch views instantly
                            and keep your finger on the pulse of every location.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left: Branch Selector Panel */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-[#0B0D13]">
                                        Your Branches
                                    </h3>
                                    <button
                                        className="w-8 h-8 rounded-[0.625rem] flex items-center justify-center"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
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
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {branches.map(branch => (
                                        <div
                                            key={branch.id}
                                            className={`p-4 rounded-[0.625rem] cursor-pointer transition-all ${
                                                branch.active
                                                    ? "bg-[#F7C74B]/15 border-2 border-[#F7C74B]"
                                                    : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                                            }`}
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4
                                                        className={`font-semibold ${branch.active ? "text-[#0B0D13]" : "text-[#64748B]"}`}
                                                    >
                                                        {branch.name}
                                                    </h4>
                                                    <p className="text-sm text-[#64748B]">
                                                        {branch.location}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                                                        branch.status ===
                                                        "online"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                    }`}
                                                >
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${
                                                            branch.status ===
                                                            "online"
                                                                ? "bg-green-500"
                                                                : "bg-red-500"
                                                        }`}
                                                    ></span>
                                                    {branch.status === "online"
                                                        ? "Online"
                                                        : "Offline"}
                                                </span>
                                            </div>

                                            {branch.status === "online" && (
                                                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100">
                                                    <div>
                                                        <p className="text-xs text-[#64748B]">
                                                            Orders
                                                        </p>
                                                        <p
                                                            className={`font-semibold ${branch.active ? "text-[#0B0D13]" : "text-[#64748B]"}`}
                                                        >
                                                            {branch.orders}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-[#64748B]">
                                                            Tables
                                                        </p>
                                                        <p
                                                            className={`font-semibold ${branch.active ? "text-[#0B0D13]" : "text-[#64748B]"}`}
                                                        >
                                                            {branch.tables}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-[#64748B]">
                                                            Revenue
                                                        </p>
                                                        <p
                                                            className="font-semibold text-sm bg-clip-text text-transparent"
                                                            style={{
                                                                backgroundImage:
                                                                    branch.active
                                                                        ? "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)"
                                                                        : "none",
                                                                color: branch.active
                                                                    ? "transparent"
                                                                    : "#64748B",
                                                            }}
                                                        >
                                                            {branch.revenue}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Aggregate Stats */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-[#64748B]">
                                            All Branches Today
                                        </span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[#F7C74B]/15 text-[#0B0D13] font-medium">
                                            3/4 Online
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 rounded-[0.625rem] p-3 text-center">
                                            <p
                                                className="text-xl font-bold bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                                }}
                                            >
                                                ₦639,500
                                            </p>
                                            <p className="text-xs text-[#64748B]">
                                                Total Revenue
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 rounded-[0.625rem] p-3 text-center">
                                            <p
                                                className="text-xl font-bold bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                                }}
                                            >
                                                84
                                            </p>
                                            <p className="text-xs text-[#64748B]">
                                                Total Orders
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map Screenshot + Features */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Map/Branch View Screenshot */}
                            <div className="bg-[#0B0D13] rounded-2xl p-2 shadow-2xl">
                                {/* Browser Top Bar */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                                            <span className="w-3 h-3 rounded-full bg-[#28CA41]"></span>
                                        </div>
                                        <div className="ml-4 flex items-center gap-2">
                                            <span className="text-white/50 text-sm">
                                                rms.lzjesoleen.com/branches
                                            </span>
                                        </div>
                                    </div>

                                    {/* Branch Tabs in Browser */}
                                    <div className="hidden md:flex items-center gap-1">
                                        {[
                                            "Victoria Island",
                                            "Ikeja",
                                            "Wuse",
                                        ].map((tab, i) => (
                                            <span
                                                key={tab}
                                                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                                    i === 0
                                                        ? "bg-[#F7C74B] text-[#0B0D13]"
                                                        : "bg-white/10 text-white/50 hover:bg-white/20"
                                                }`}
                                            >
                                                {tab}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Screenshot Placeholder */}
                                <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-xl relative">
                                    <Image
                                        src={
                                            "/assets/images/rms/multi-branch-map.png"
                                        }
                                        alt="Multi-Branch Map Screenshot"
                                        fill
                                        className="rounded-b-xl object-contain"
                                    />
                                    {/* <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
                                        <svg
                                            className="w-10 h-10 text-[#64748B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[#64748B] font-medium text-lg">
                                        Screenshot: Multi-Branch Map View
                                    </p>
                                    <p className="text-[#64748B]/60 text-sm mt-1">
                                        Interactive map with branch pins, status
                                        & quick stats
                                    </p>
                                </div> */}
                                </div>
                            </div>

                            {/* Feature Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {branchFeatures.map(feature => (
                                    <div
                                        key={feature.title}
                                        className="bg-white rounded-[0.625rem] p-5 shadow-md border border-gray-100 hover:border-[#F7C74B]/30 transition-colors"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-[0.625rem] flex items-center justify-center mb-4"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13]">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-[#0B0D13] mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[#64748B] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Floor Plan Teaser */}
                            <div className="bg-[#0B0D13] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                                <div className="shrink-0">
                                    <div
                                        className="w-16 h-16 rounded-[0.625rem] flex items-center justify-center"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        <svg
                                            className="w-8 h-8 text-[#0B0D13]"
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
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-[#F8F8F8] font-semibold text-lg mb-1">
                                        Table & Floor Plan Mapping
                                    </h4>
                                    <p className="text-[#64748B] text-sm">
                                        Each branch includes visual
                                        coordinate-based table management. Drag,
                                        drop, and design your floor layout.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-5 py-2.5 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#F7C74B] font-medium hover:bg-[#F7C74B]/10 transition-colors whitespace-nowrap cursor-pointer"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MultiBranchMap;
