import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#F8F8F8] border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        src={"/assets/logo.svg"}
                        alt="LZJ Logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-[#0B0D13] font-semibold text-xl font-clash-display">
                        RMS
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        className="text-[#64748B] hover:text-[#0B0D13] transition-colors font-medium"
                    >
                        Features
                    </a>
                    <a
                        href="#live-flow"
                        className="text-[#64748B] hover:text-[#0B0D13] transition-colors font-medium"
                    >
                        Live Flow
                    </a>
                    <a
                        href="#analytics"
                        className="text-[#64748B] hover:text-[#0B0D13] transition-colors font-medium"
                    >
                        Analytics
                    </a>
                    <a
                        href="#branches"
                        className="text-[#64748B] hover:text-[#0B0D13] transition-colors font-medium"
                    >
                        Multi-Branch
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    {/* Login Button - Outline Style */}
                    <Link
                        className="px-6 py-3 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#0B0D13] font-semibold hover:bg-[#F7C74B]/10 transition-colors cursor-pointer hidden md:inline-flex"
                        style={{ padding: "0.75rem 1.5rem" }}
                        href={"https://rms.lzjesoleen.com"}
                        target="_blank"
                    >
                        Login
                    </Link>

                    {/* Request Demo Button - Primary Gradient */}
                    <Link
                        href={"/get-started"}
                        className="px-6 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold hover:opacity-90 transition-opacity"
                        style={{
                            padding: "0.75rem 1.5rem",
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    >
                        Request Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
