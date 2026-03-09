import Image from "next/image";
import React from "react";

const MenuArchitect = () => {
    const categories = [
        { name: "Appetizers", count: 12, active: false },
        { name: "Main Course", count: 24, active: false },
        { name: "Local Delicacies", count: 18, active: true },
        { name: "Beverages", count: 15, active: false },
        { name: "Desserts", count: 8, active: false },
    ];

    const menuFeatures = [
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
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                </svg>
            ),
            title: "Category Management",
            description:
                "Organize your menu with custom categories, drag-and-drop ordering, and visibility controls.",
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                </svg>
            ),
            title: "Item Builder",
            description:
                "Create detailed menu items with photos, descriptions, pricing tiers, and dietary tags.",
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Real-time Updates",
            description:
                "Changes sync instantly across all branches and ordering devices — no refresh needed.",
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
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                </svg>
            ),
            title: "Availability Toggle",
            description:
                "Mark items as unavailable with one click — perfect for sold-out dishes or seasonal specials.",
        },
    ];

    return (
        <section id="features" className="bg-[#F8F8F8] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F7C74B]"></span>
                        <span className="text-[#0B0D13] text-sm font-medium">
                            Dynamic Menu Management
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D13] leading-tight mb-6">
                        Architect Your Menu,
                        <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                            }}
                        >
                            Down to the Last Detail
                        </span>
                    </h2>

                    <p className="text-lg text-[#64748B] leading-relaxed">
                        Build, organize, and update your menu in real-time. From
                        categories to individual items, every detail is under
                        your control.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Interactive Menu Preview */}
                    <div className="space-y-6">
                        {/* Categories Panel */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-[#0B0D13]">
                                    Menu Categories
                                </h3>
                                <button
                                    className="px-4 py-2 rounded-[0.625rem] text-sm font-medium text-[#0B0D13]"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    + Add Category
                                </button>
                            </div>

                            <div className="space-y-2">
                                {categories.map(category => (
                                    <div
                                        key={category.name}
                                        className={`flex items-center justify-between p-4 rounded-[0.625rem] cursor-pointer transition-all ${
                                            category.active
                                                ? "bg-[#F7C74B]/15 border-2 border-[#F7C74B]"
                                                : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-2 h-2 rounded-full ${category.active ? "bg-[#F7C74B]" : "bg-gray-300"}`}
                                            ></div>
                                            <span
                                                className={`font-medium ${category.active ? "text-[#0B0D13]" : "text-[#64748B]"}`}
                                            >
                                                {category.name}
                                            </span>
                                        </div>
                                        <span
                                            className={`text-sm px-2 py-1 rounded-full ${
                                                category.active
                                                    ? "bg-[#F7C74B]/20 text-[#0B0D13]"
                                                    : "bg-gray-100 text-[#64748B]"
                                            }`}
                                        >
                                            {category.count} items
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Peppered Gizzard Item Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 w-[70%] mx-auto">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-[#0B0D13]">
                                    Item Details
                                </h3>
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                    Available
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 ">
                                {/* Item Image Placeholder */}
                                {/* <div className=" rounded-[0.625rem] bg-linear-to-br from-amber-100 to-amber-200 flex items-center justify-center shrink-0">
                                    <span className="text-4xl">🍖</span>
                                </div> */}
                                <div className="relative aspect-square h-40 w-full rounded-[0.625rem] bg-[#0B0D13]/10 flex items-center justify-center">
                                    <Image
                                        src={
                                            "/assets/images/rms/smokey-jollof.jpg"
                                        }
                                        alt="Smokey Jollof"
                                        fill
                                        className="rounded-[0.625rem] object-cover"
                                    />
                                </div>

                                {/* Item Info */}
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-[#0B0D13] mb-1">
                                        Peppered Gizzard
                                    </h4>
                                    <p className="text-[#64748B] text-sm mb-3">
                                        Succulent gizzards tossed in our
                                        signature spicy pepper sauce with onions
                                        and bell peppers.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="text-2xl font-bold bg-clip-text text-transparent"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                            }}
                                        >
                                            ₦2,500
                                        </span>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-medium">
                                                Spicy
                                            </span>
                                            <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium">
                                                Popular
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                                <button className="flex-1 px-4 py-2.5 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#0B0D13] font-medium hover:bg-[#F7C74B]/10 transition-colors">
                                    Edit Item
                                </button>
                                <button
                                    className="flex-1 px-4 py-2.5 rounded-[0.625rem] text-[#0B0D13] font-medium"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    View Analytics
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Screenshot + Features */}
                    <div className="space-y-8">
                        {/* Main Screenshot */}
                        <div className="bg-[#0B0D13] rounded-2xl p-2 shadow-2xl">
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
                                            app.lzj-rms.com/menu/architect
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Screenshot Placeholder */}
                            <div className="bg-slate-200 aspect-video flex items-center justify-center rounded-b-xl relative">
                                <Image
                                    src="/assets/images/rms/kitchen-display.png"
                                    alt="Menu Architect Screenshot"
                                    fill
                                    className="object-cover rounded-b-xl"
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
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[#64748B] font-medium text-lg">
                                        Screenshot: Menu Architect
                                    </p>
                                    <p className="text-[#64748B]/60 text-sm mt-1">
                                        Full category & item management
                                        interface
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {menuFeatures.map(feature => (
                                <div
                                    key={feature.title}
                                    className="bg-white rounded-[0.625rem] p-5 shadow-md border border-gray-100 hover:border-[#F7C74B]/30 transition-colors"
                                >
                                    <div
                                        className="w-10 h-10 rounded-[0.625rem] flex items-center justify-center mb-3"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        <span className="text-[#0B0D13]">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-[#0B0D13] mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[#64748B] text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuArchitect;
