import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#F8F8F8] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Content */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    {/* Eyebrow Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                        <span className="text-[#0B0D13] text-sm font-medium">
                            Multi-Branch Restaurant Management
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl font-bold text-[#0B0D13] leading-tight mb-6">
                        Command Your Kitchen,
                        <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                            }}
                        >
                            Conquer Every Branch
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl mx-auto">
                        The all-in-one SaaS platform that gives restaurant
                        owners complete control over multi-location operations,
                        real-time orders, and financial intelligence — all from
                        a single dashboard.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary CTA - Request Demo */}
                        <button
                            className="px-8 py-4 rounded-[0.625rem] text-[#0B0D13] font-semibold hover:opacity-90 transition-opacity text-lg"
                            style={{
                                padding: "1rem 2rem",
                                background:
                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                            }}
                        >
                            Request a Free Demo
                        </button>

                        {/* Secondary CTA - Watch Video */}
                        <button
                            className="px-8 py-4 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#0B0D13] font-semibold hover:bg-[#F7C74B]/10 transition-colors text-lg flex items-center gap-2"
                            style={{ padding: "1rem 2rem" }}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Watch Overview
                        </button>
                    </div>
                </div>

                {/* Dashboard Screenshot Placeholder */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Decorative Glow Effect */}
                    <div
                        className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    ></div>

                    {/* Browser Window Frame */}
                    <div className="relative bg-[#0B0D13] rounded-2xl p-2 shadow-2xl">
                        {/* Browser Top Bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#28CA41]"></span>
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-white/10 rounded-md py-1.5 px-4 text-center">
                                    <span className="text-white/50 text-sm">
                                        app.lzj-rms.com/dashboard
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Screenshot Placeholder */}
                        <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-2xl relative overflow-hidden">
                            {/* <div className="text-center relative"> */}
                            {/* <div className="w-16 h-16 mx-auto mb-4 rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
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
                                </div> */}
                            <Image
                                src="/assets/images/rms/dashboard.png"
                                alt="Dashboard Screenshot"
                                // width={640}
                                // height={360}
                                fill
                                className="rounded-b-2xl"
                            />
                            {/* <p className="text-[#64748B] font-medium text-lg">
                                    Screenshot: Dashboard Overview
                                </p>
                                <p className="text-[#64748B]/60 text-sm mt-1">
                                    Real-time metrics, orders & branch
                                    performance
                                </p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <p className="text-[#64748B] text-sm mb-6">
                        Trusted by restaurant owners managing multiple locations
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                        <div className="text-[#0B0D13] font-bold text-xl">
                            🍜 NoodleHub
                        </div>
                        <div className="text-[#0B0D13] font-bold text-xl">
                            🍕 PizzaChain+
                        </div>
                        <div className="text-[#0B0D13] font-bold text-xl">
                            🍔 BurgerSpot
                        </div>
                        <div className="text-[#0B0D13] font-bold text-xl">
                            🍣 SushiNetwork
                        </div>
                        <div className="text-[#0B0D13] font-bold text-xl">
                            ☕ CaféCentral
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
