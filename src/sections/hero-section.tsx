import { Button } from "@/components/ui/button";
import useLoaderStore from "@/lib/stores/loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    const { isLoaded } = useLoaderStore();

    useGSAP(() => {
        const heroTitle = gsap.utils.toArray(
            `.header-title h1`,
        ) as HTMLElement[];
        const heroSubtext = document.querySelector(".hero-subtext");

        const heroBtns = gsap.utils.toArray(
            `.hero-btns button`,
        ) as HTMLElement[];
        const heroStrip = document.querySelector(".hero-strip");
        const heroBanner = document.querySelector(".hero-banner");

        // This happens before the user sees anything
        gsap.set(heroTitle, {
            y: 100,
            opacity: 0,
        });
        gsap.set(heroSubtext, { y: 30, opacity: 0 });
        gsap.set(heroBtns, { y: 50, opacity: 0 });
        gsap.set(heroStrip, { scale: 0.8, opacity: 0 });
        gsap.set(heroBanner, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        });

        const tl = gsap.timeline({
            paused: !isLoaded, // Controls play state via Zustand
            defaults: {
                ease: "power4.out",
                duration: 1,
            },
        });

        tl.to(heroStrip, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
        })
            .to(
                heroTitle,
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                },
                "-=0.4",
            )
            .to(
                heroSubtext,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                },
                "-=0.6",
            )
            .to(
                heroBtns,
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                },
                "-=0.5",
            )
            .to(
                heroBanner,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.4,
                    ease: "power4.inOut",
                },
                "-=0.6",
            );
    }, [isLoaded]);

    return (
        <section className="flex flex-col items-center gap-y-6 px-6 lg:px-0 pt-4 pb-16">
            {/* Announcement Strip */}
            <div className="hero-strip inline-flex items-center gap-x-3 text-xs lg:text-sm text-body-text rounded-full bg-light-grey border border-primary-gold/20 p-1.5 pr-5">
                <span className="bg-primary-gold py-2 px-3 rounded-full text-dark-navy font-semibold text-xs">
                    NEW
                </span>
                <span>LZJ Restaurant Management System is now live 🎉</span>
            </div>

            {/* Main Heading */}
            <div className="text-center max-w-4xl mx-auto">
                <div className="font-bold text-3xl lg:text-5xl xl:text-[56px] font-clash-display leading-tight">
                    <div className="overflow-hidden header-title">
                        <h1 className="text-dark-navy">
                            Building Smart, Adaptive Systems
                        </h1>
                    </div>
                    <div className="overflow-hidden header-title">
                        <h1 className="text-dark-navy">
                            for{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                }}
                            >
                                Africa&apos;s Growing Businesses
                            </span>
                        </h1>
                    </div>
                </div>

                <p className="hero-subtext text-base lg:text-xl text-body-text mt-6 max-w-2xl mx-auto leading-relaxed">
                    Software that simplifies operations, automates workflows,
                    and unlocks data-driven clarity — starting with restaurants,
                    expanding everywhere.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 hero-btns">
                <Link href="/solutions">
                    <Button className="w-full sm:w-auto px-8 py-6 text-base">
                        Explore Solutions
                    </Button>
                </Link>
                <Link href="/get-started">
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto px-8 py-6 text-base"
                    >
                        Book a Consultation
                    </Button>
                </Link>
            </div>

            {/* Hero Banner */}
            <div className="hero-banner relative w-full lg:w-[85%] xl:w-[80%] mx-auto mt-12">
                {/* Glow Effect */}
                <div
                    className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl -z-10"
                    style={{
                        background:
                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                    }}
                />

                {/* Browser Frame */}
                <div className="bg-dark-navy rounded-2xl p-2 shadow-2xl">
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#28CA41]"></span>
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-white/10 rounded-lg py-2 px-4 text-center max-w-md mx-auto">
                                <span className="text-white/50 text-sm">
                                    app.lzjesoleen.com/dashboard
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-video rounded-b-xl overflow-hidden">
                        <Image
                            src="/assets/images/rms/dashboard-overview.png"
                            fill
                            alt="LZJ RMS Dashboard"
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
