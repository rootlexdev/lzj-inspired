import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const AffiliateSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const content =
                containerRef.current?.querySelector(".affiliate-content");
            const stats = gsap.utils.toArray(
                ".affiliate-stat",
            ) as HTMLElement[];

            if (!content) return null;

            gsap.fromTo(
                content,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                },
            );

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
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section ref={containerRef} className="py-24 px-[5%]">
            <div className="max-w-6xl mx-auto">
                <div className="relative bg-dark-navy rounded-3xl overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-gold blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-gold blur-3xl" />
                    </div>

                    <div className="relative p-8 lg:p-16">
                        <div className="lg:flex items-center justify-between gap-12">
                            {/* Content */}
                            <div className="affiliate-content lg:w-[55%] mb-10 lg:mb-0">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-gold/10 border border-primary-gold/20 mb-6">
                                    <svg
                                        className="w-4 h-4 text-primary-gold"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-primary-gold text-sm font-medium">
                                        Partner Program
                                    </span>
                                </div>

                                <h2 className="font-clash-display text-3xl lg:text-4xl font-bold text-soft-white mb-6">
                                    Grow With Us as an{" "}
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        Affiliate Partner
                                    </span>
                                </h2>

                                <p className="text-body-text text-lg leading-relaxed mb-8">
                                    Earn commissions by referring businesses to
                                    LZJ. Help African businesses modernize their
                                    operations while building a sustainable
                                    income stream.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/affiliate">
                                        <Button className="w-full sm:w-auto">
                                            Join Affiliate Program
                                        </Button>
                                    </Link>
                                    <Link href="/affiliate#terms">
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto border-primary-gold/50 text-primary-gold hover:bg-primary-gold/10"
                                        >
                                            View Terms
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="lg:w-[40%]">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {
                                            value: "20%",
                                            label: "Commission Rate",
                                            icon: "💰",
                                        },
                                        {
                                            value: "3+",
                                            label: "Min. Conversions",
                                            icon: "🎯",
                                        },
                                        {
                                            value: "Fast",
                                            label: "Payouts",
                                            icon: "⚡",
                                        },
                                        {
                                            value: "Free",
                                            label: "To Join",
                                            icon: "✨",
                                        },
                                    ].map(stat => (
                                        <div
                                            key={stat.label}
                                            className="affiliate-stat bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-primary-gold/30 transition-colors"
                                        >
                                            <span className="text-2xl mb-2 block">
                                                {stat.icon}
                                            </span>
                                            <p
                                                className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent mb-1"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                }}
                                            >
                                                {stat.value}
                                            </p>
                                            <p className="text-body-text text-sm">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateSection;
