import Image from "next/image";
import React from "react";

const LiveFlow = () => {
    const flowSteps = [
        {
            step: "01",
            title: "Order Creation",
            description:
                "Seamlessly create orders for dine-in guests or takeaway customers with intuitive table selection and item browsing.",
            tags: ["Dine-in", "Takeaway", "Table Selection"],
            screenshotLabel: "Screenshot: Order Creation Screen",
            screenshotDesc: "Table grid, menu categories & cart view",
            screenshotImg: "/assets/images/rms/order-creation.png",
        },
        {
            step: "02",
            title: "Kitchen Display",
            description:
                "Orders instantly appear on kitchen displays with priority queuing, item details, and preparation timers.",
            tags: ["Real-time Sync", "Priority Queue", "Prep Timer"],
            screenshotLabel: "Screenshot: Kitchen Display System",
            screenshotDesc: "Active orders, status cards & timing",
            screenshotImg: "/assets/images/rms/kitchen-display.png",
        },
        {
            step: "03",
            title: "Order Tracking",
            description:
                "Track every order from preparation to serving with live status updates visible to floor staff and managers.",
            tags: ["Live Status", "Floor View", "Notifications"],
            screenshotLabel: "Screenshot: Order Tracking Dashboard",
            screenshotDesc: "Order timeline & status indicators",
            screenshotImg: "/assets/images/rms/order-tracking.png",
        },
        {
            step: "04",
            title: "Payment & Closing",
            description:
                "Complete transactions with multiple payment methods, split bills, and automatic receipt generation.",
            tags: ["Multi-Payment", "Split Bills", "Receipts"],
            screenshotLabel: "Screenshot: Payment & Checkout",
            screenshotDesc: "Payment options & bill summary",
            screenshotImg: "/assets/images/rms/payment-checkout.png",
        },
    ];

    return (
        <section id="live-flow" className="bg-[#0B0D13] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F7C74B] animate-pulse"></span>
                        <span className="text-[#F7C74B] text-sm font-medium">
                            Live Order Flow
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8F8F8] leading-tight mb-6">
                        From First Click to
                        <span
                            className="bg-clip-text text-transparent ml-3"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Final Receipt
                        </span>
                    </h2>

                    <p className="text-lg text-[#64748B] leading-relaxed">
                        Experience the complete order lifecycle with real-time
                        visibility at every stage. No more guesswork — just
                        seamless flow from order to closing.
                    </p>
                </div>

                {/* Flow Timeline */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#F7C74B] via-[#F7C74B]/50 to-[#F7C74B]/10"></div>

                    {/* Flow Steps */}
                    <div className="space-y-16 lg:space-y-24">
                        {flowSteps.map((item, index) => (
                            <div
                                key={item.step}
                                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Content Side */}
                                <div
                                    className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}
                                >
                                    <div
                                        className={`max-w-lg ${index % 2 === 1 ? "lg:ml-auto" : ""}`}
                                    >
                                        {/* Step Number */}
                                        <div
                                            className={`inline-flex items-center gap-3 mb-4 ${
                                                index % 2 === 1
                                                    ? "lg:flex-row-reverse"
                                                    : ""
                                            }`}
                                        >
                                            <span
                                                className="text-5xl font-bold bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                }}
                                            >
                                                {item.step}
                                            </span>
                                            <div className="w-12 h-px bg-[#F7C74B]/50"></div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#F8F8F8] mb-4">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#64748B] text-lg leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        {/* Tags */}
                                        <div
                                            className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                                        >
                                            {item.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 text-[#F7C74B] text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node (Desktop) */}
                                <div className="hidden lg:flex items-center justify-center relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        <span className="text-[#0B0D13] font-bold text-lg">
                                            {item.step}
                                        </span>
                                    </div>
                                </div>

                                {/* Screenshot Side */}
                                <div className="flex-1 w-full">
                                    <div className="bg-[#1A1D27] rounded-2xl p-2 shadow-xl border border-white/5">
                                        {/* Mini Header Bar */}
                                        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></span>
                                            </div>
                                            <div className="flex-1 mx-2">
                                                <div className="bg-white/5 rounded py-1 px-3 text-center">
                                                    <span className="text-white/30 text-xs">
                                                        rms.lzjesoleen.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Screenshot Placeholder */}
                                        <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-xl relative">
                                            <Image
                                                src={item.screenshotImg}
                                                alt={item.screenshotLabel}
                                                fill
                                                className="object-contain rounded-b-xl w-full"
                                            />
                                            {/* <div className="text-center p-4">
                                                <div className="w-12 h-12 mx-auto mb-3 rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 text-[#64748B]"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-[#64748B] font-medium">
                                                    {item.screenshotLabel}
                                                </p>
                                                <p className="text-[#64748B]/60 text-sm mt-1">
                                                    {item.screenshotDesc}
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "< 30s", label: "Avg. Order Creation" },
                        { value: "99.9%", label: "System Uptime" },
                        { value: "Real-time", label: "Kitchen Sync" },
                        { value: "3 taps", label: "To Close a Bill" },
                    ].map(stat => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-[0.625rem] bg-white/5 border border-white/5"
                        >
                            <p
                                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent mb-2"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
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
    );
};

export default LiveFlow;
