import { useRef } from "react";
import SectionTitle from "./__components/section-title";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
    {
        id: "rms",
        title: "Restaurant Management System",
        description:
            "Complete control over multi-branch operations, real-time ordering, menu management, and financial analytics.",
        status: "live",
        image: "/assets/images/rms/dashboard-overview.png",
        features: [
            "Multi-Branch Control",
            "Live Order Tracking",
            "Financial Reports",
            "Table Management",
        ],
        href: "/solutions/rms",
        pricing: {
            startingAt: "₦75,000",
            period: "/month",
            note: "per branch",
        },
    },
    {
        id: "inventory",
        title: "Inventory & Stock Management",
        description:
            "Track stock levels, automate reordering, and eliminate waste with intelligent inventory systems.",
        status: "coming",
        image: null,
        features: [
            "Real-time Tracking",
            "Auto Reorder",
            "Supplier Management",
            "Waste Analytics",
        ],
        href: "/solutions",
        pricing: null,
    },
    {
        id: "hr",
        title: "HR & Staff Management",
        description:
            "Manage employee schedules, payroll, performance tracking, and team communication.",
        status: "coming",
        image: null,
        features: [
            "Shift Scheduling",
            "Payroll Integration",
            "Performance Metrics",
            "Team Chat",
        ],
        href: "/solutions",
        pricing: null,
    },
    {
        id: "crm",
        title: "Customer Relationship Management",
        description:
            "Build lasting customer relationships with loyalty programs, feedback systems, and targeted campaigns.",
        status: "coming",
        image: null,
        features: [
            "Loyalty Programs",
            "Feedback Collection",
            "Campaign Tools",
            "Customer Insights",
        ],
        href: "/solutions",
        pricing: null,
    },
];

const SolutionsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(
        () => {
            const cards = cardsRef.current;

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y: 60,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                        delay: index * 0.1,
                    },
                );
            });
        },
        { scope: containerRef },
    );

    return (
        <section ref={containerRef} className="py-24 px-[5%]">
            <SectionTitle title="Our Solutions" />

            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mt-8 mb-16">
                <h2 className="font-clash-display text-3xl lg:text-4xl font-bold text-dark-navy mb-6">
                    Everything You Need to Run Your Business{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                        }}
                    >
                        Efficiently
                    </span>
                </h2>
                <p className="text-body-text text-lg leading-relaxed">
                    Our solutions combine automation, intelligence, and clean
                    design to help businesses eliminate guesswork. Starting with
                    restaurants — expanding to serve all of Africa.
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {SOLUTIONS.map((solution, index) => (
                    <div
                        key={solution.id}
                        ref={el => {
                            if (el) cardsRef.current[index] = el;
                        }}
                        className={cn(
                            "group relative rounded-2xl overflow-hidden transition-all duration-500",
                            solution.status === "live"
                                ? "bg-dark-navy lg:col-span-2"
                                : "bg-soft-white border border-light-grey hover:border-primary-gold/30",
                        )}
                    >
                        {solution.status === "live" ? (
                            // Featured Live Product Card
                            <div className="p-8 lg:p-12">
                                <div className="lg:flex items-start gap-12">
                                    {/* Content */}
                                    <div className="lg:w-[45%] mb-8 lg:mb-0">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-gold/20 border border-primary-gold/30">
                                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                                <span className="text-primary-gold text-sm font-medium">
                                                    Live Now
                                                </span>
                                            </div>
                                            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                                <span className="text-soft-white/60 text-sm">
                                                    🏆 Flagship Product
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="font-clash-display text-2xl lg:text-3xl font-bold text-soft-white mb-4">
                                            {solution.title}
                                        </h3>

                                        <p className="text-body-text text-base lg:text-lg leading-relaxed mb-6">
                                            {solution.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 mb-8">
                                            {solution.features.map(feature => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-2"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-primary-gold shrink-0"
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
                                                    <span className="text-soft-white/80 text-sm">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Pricing Teaser */}
                                        {solution.pricing && (
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
                                                <div className="flex items-end gap-2 mb-2">
                                                    <span className="text-body-text text-sm">
                                                        Starting at
                                                    </span>
                                                    <span
                                                        className="text-3xl font-bold bg-clip-text text-transparent"
                                                        style={{
                                                            backgroundImage:
                                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                        }}
                                                    >
                                                        {
                                                            solution.pricing
                                                                .startingAt
                                                        }
                                                    </span>
                                                    <span className="text-soft-white/60 text-sm">
                                                        {
                                                            solution.pricing
                                                                .period
                                                        }
                                                    </span>
                                                </div>
                                                <p className="text-body-text text-xs">
                                                    {solution.pricing.note} •
                                                    14-day free trial included
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href={solution.href}>
                                                <Button className="w-full sm:w-auto">
                                                    Explore RMS
                                                </Button>
                                            </Link>
                                            <Link href="/solutions/rms#pricing">
                                                <Button
                                                    variant="outline"
                                                    className="w-full sm:w-auto border-primary-gold text-primary-gold hover:bg-primary-gold/10"
                                                >
                                                    View Full Pricing
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="lg:w-[55%]">
                                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                            {/* Browser dots */}
                                            <div className="bg-slate-grey/50 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></span>
                                            </div>
                                            <Image
                                                src={solution.image!}
                                                alt={solution.title}
                                                width={800}
                                                height={500}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Coming Soon Cards
                            <div className="p-6 lg:p-8 h-full flex flex-col">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-grey/50 w-fit mb-4">
                                    <span className="text-body-text text-xs font-medium">
                                        Coming Soon
                                    </span>
                                </div>

                                <h3 className="font-clash-display text-xl lg:text-2xl font-bold text-dark-navy mb-3">
                                    {solution.title}
                                </h3>

                                <p className="text-body-text text-sm lg:text-base leading-relaxed mb-6 grow">
                                    {solution.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {solution.features.map(feature => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1.5 rounded-full bg-light-grey text-body-text text-xs"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-dark-navy/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
                <p className="text-body-text mb-4">
                    Don&apos;t see what you need? We build custom solutions too.
                </p>
                <Link href="/get-started">
                    <Button variant="outline">
                        Let&apos;s Talk Custom Development
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default SolutionsSection;
