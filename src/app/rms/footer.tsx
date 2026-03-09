import React from "react";

const CTAFooter = () => {
    const footerLinks = {
        product: [
            { name: "Features", href: "#features" },
            { name: "Live Flow", href: "#live-flow" },
            { name: "Analytics", href: "#analytics" },
            { name: "Multi-Branch", href: "#branches" },
            { name: "Pricing", href: "#pricing" },
        ],
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press Kit", href: "#" },
            { name: "Contact", href: "#" },
        ],
        resources: [
            { name: "Documentation", href: "#" },
            { name: "Help Center", href: "#" },
            { name: "API Reference", href: "#" },
            { name: "Status Page", href: "#" },
            { name: "Community", href: "#" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR", href: "#" },
        ],
    };

    const socialLinks = [
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "#",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Final CTA Section */}
            <section className="bg-[#0B0D13] py-24 px-6 relative overflow-hidden">
                {/* Background Decorations */}
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background:
                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                    }}
                ></div>
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background:
                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                    }}
                ></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#F7C74B] animate-pulse"></span>
                            <span className="text-[#F7C74B] text-sm font-medium">
                                Start Your Journey
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                            Ready to Transform
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Your Restaurant Operations?
                            </span>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl mx-auto">
                            Join hundreds of restaurant owners who&apos;ve
                            streamlined their operations, increased revenue, and
                            regained control of their business with LZJ RMS.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <button
                                className="px-8 py-4 rounded-[0.625rem] text-[#0B0D13] font-semibold text-lg hover:opacity-90 transition-opacity"
                                style={{
                                    padding: "1rem 2rem",
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Request a Free Demo
                            </button>
                            <button
                                className="px-8 py-4 rounded-[0.625rem] border-2 border-[#F7C74B] text-[#F7C74B] font-semibold text-lg hover:bg-[#F7C74B]/10 transition-colors flex items-center gap-2"
                                style={{ padding: "1rem 2rem" }}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                Talk to Sales
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="flex items-center gap-2 text-[#64748B]">
                                <svg
                                    className="w-5 h-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm">
                                    Free 14-day trial
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#64748B]">
                                <svg
                                    className="w-5 h-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm">
                                    No credit card required
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#64748B]">
                                <svg
                                    className="w-5 h-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm">Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0B0D13] border-t border-white/10 pt-16 pb-8 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Footer Top */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                        {/* Brand Column */}
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-[0.625rem] bg-[#F7C74B] flex items-center justify-center">
                                    <span className="text-[#0B0D13] font-bold text-lg">
                                        LZJ
                                    </span>
                                </div>
                                <span className="text-[#F8F8F8] font-semibold text-xl">
                                    RMS
                                </span>
                            </div>
                            <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-xs">
                                The comprehensive restaurant management system
                                for modern multi-branch operations.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map(social => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 rounded-[0.625rem] bg-white/5 flex items-center justify-center text-[#64748B] hover:bg-[#F7C74B]/20 hover:text-[#F7C74B] transition-colors"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="text-[#F8F8F8] font-semibold mb-4">
                                Product
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.product.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[#64748B] text-sm hover:text-[#F7C74B] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="text-[#F8F8F8] font-semibold mb-4">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[#64748B] text-sm hover:text-[#F7C74B] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h4 className="text-[#F8F8F8] font-semibold mb-4">
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[#64748B] text-sm hover:text-[#F7C74B] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="text-[#F8F8F8] font-semibold mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[#64748B] text-sm hover:text-[#F7C74B] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#64748B] text-sm">
                            © 2026 LZJ RMS. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-[#64748B] text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                All systems operational
                            </span>
                            <a
                                href="#"
                                className="text-[#64748B] text-sm hover:text-[#F7C74B] transition-colors"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default CTAFooter;
