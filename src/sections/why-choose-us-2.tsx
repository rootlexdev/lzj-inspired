import { useRef } from "react";
import SectionTitle from "./__components/section-title";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VALUES = [
    {
        icon: "🛡️",
        title: "Built for Reliability",
        description:
            "99.9% uptime guarantee. Your operations never stop because of us.",
    },
    {
        icon: "🚀",
        title: "Designed for Scale",
        description:
            "From 1 branch to 100 — our systems grow with your business.",
    },
    {
        icon: "🇳🇬",
        title: "Made for Africa",
        description:
            "Local support, Naira pricing, and features built for African markets.",
    },
    {
        icon: "🔒",
        title: "Secure by Default",
        description:
            "Enterprise-grade security protects your data and your customers.",
    },
];

const WhyChooseUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Background color transition
            gsap.to(containerRef.current, {
                backgroundColor: "#0b0d13",
                duration: 0.8,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate value cards
            const valueCards = gsap.utils.toArray(
                ".value-card",
            ) as HTMLElement[];
            gsap.fromTo(
                valueCards,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".values-grid",
                        start: "top 80%",
                    },
                },
            );

            // Animate screenshot
            gsap.fromTo(
                ".choose-us-screenshot",
                { y: 40, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".choose-us-screenshot",
                        start: "top 85%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            ref={containerRef}
            className="py-24 bg-soft-white relative overflow-hidden"
        >
            {/* Background Logo Watermark */}
            <Image
                src="/assets/grey-logo.svg"
                width={500}
                height={400}
                alt=""
                className="absolute right-6 top-12 lg:right-24 lg:top-12 w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] opacity-[0.03] -rotate-15 pointer-events-none"
            />

            <div className="relative z-10">
                <SectionTitle title="Why Choose Us" />

                <div className="px-[5%] mt-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="lg:flex items-center gap-12">
                            {/* Left: Content */}
                            <div className="lg:w-[50%] mb-12 lg:mb-0">
                                <h2 className="font-clash-display text-soft-white font-bold text-3xl lg:text-4xl mb-10">
                                    Built for Reliability,{" "}
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    >
                                        Designed for Growth
                                    </span>
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-5 values-grid">
                                    {VALUES.map(value => (
                                        <div
                                            key={value.title}
                                            className="value-card bg-white/5 border border-white/10 rounded-xl p-5 hover:border-primary-gold/30 transition-colors"
                                        >
                                            <span className="text-2xl mb-3 block">
                                                {value.icon}
                                            </span>
                                            <h4 className="font-semibold text-soft-white mb-2">
                                                {value.title}
                                            </h4>
                                            <p className="text-body-text text-sm leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Screenshot */}
                            <div className="lg:w-[50%]">
                                <div className="choose-us-screenshot relative rounded-2xl overflow-hidden bg-slate-grey p-6 lg:p-8">
                                    {/* Decorative glow */}
                                    <div
                                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    />

                                    <Image
                                        src="/assets/images/rms/daily-financial-report.png"
                                        alt="Financial Report Dashboard"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto rounded-lg relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
