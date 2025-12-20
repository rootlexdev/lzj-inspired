import { Button } from "@/components/ui/button";
import useLoaderStore from "@/lib/stores/loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
    const { isLoaded } = useLoaderStore();

    useGSAP(() => {
        const heroTitle = gsap.utils.toArray(
            `.header-title h1`
        ) as HTMLElement[];

        const heroBtns = gsap.utils.toArray(
            `.hero-btns button`
        ) as HTMLElement[];

        // This happens before the user sees anything
        gsap.set(heroTitle, {
            y: 100,
            opacity: 0,
        });
        // This happens before the user sees anything
        gsap.set(heroBtns, {
            y: 100,
            opacity: 0,
        });

        const tl = gsap.timeline({
            paused: !isLoaded, // Controls play state via Zustand
            defaults: {
                ease: "power4.out",
                duration: 1.2,
            },
        });

        tl.to(heroTitle, {
            y: 0, // Using 'y' instead of 'top' for better performance
            opacity: 1,
            stagger: 0.2, // 0.6 is very slow; 0.2-0.3 feels more professional
        })
            .to(
                heroBtns,
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                },
                "-=0.8"
            ) // Starts while titles are still finishing

            .to(
                ".hero-strip",
                {
                    scale: 1,
                    opacity: 1,
                    ease: "expo.out",
                    duration: 1.5,
                },
                "-=1"
            ) // Overlap significantly with the buttons

            .to(
                ".hero-banner",
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.6,
                    ease: "power4.inOut", // Smoother for large surface area reveals
                },
                "-=1.2"
            ); // Start this early to anchor the composition
    }, [isLoaded]);

    return (
        <div className="flex flex-col items-center gap-y-4 px-10 lg:px-0">
            <div className="scale-70 opacity-0 items-center gap-x-4 text-xs lg:text-sm text-body-text rounded-full bg-light-grey p-2.5 px-6 lg:p-0 lg:pr-4 hero-strip">
                <button className="hidden lg:inline-flex bg-primary-gold py-3 px-2 lg:p-2 rounded-xl text-body-text ">
                    NEW
                </button>
                <span className="text-center inline-block lg:text-left">
                    Our Advanced Customer Management system is live 🎉
                </span>
            </div>
            <div>
                <div className="text-center font-bold text-3xl lg:text-[42px] font-clash-display my-6">
                    <div className="overflow-hidden header-title">
                        <h1 className="text-dark-navy">
                            <span>Building Smart, Adaptive Systems for</span>
                        </h1>
                    </div>
                    <div className="overflow-hidden header-title">
                        <h1 className="text-body-text">
                            <span>Africa’s Growing Businesses</span>
                        </h1>
                    </div>
                </div>

                <p className="text-sm lg:text-lg text-body-text text-center">
                    Software that simplifies operations, automates workflows,
                    and unlocks data-driven clarity.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 lg:overflow-hidden hero-btns">
                <Button className="w-full lg:w-fit">Explore Solutions</Button>
                <Button variant={"outline"} className="w-full lg:w-fit">
                    Book a Consultation
                </Button>
            </div>

            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                }}
                className="relative h-[400px] lg:h-[600px] w-full lg:w-[80%] mx-auto my-10 hero-banner"
            >
                <Image
                    src={"/assets/images/main-screen.jpg"}
                    fill
                    alt="hero-dashboard"
                    className="object-cover object-top"
                />
            </div>
        </div>
    );
};

export default HeroSection;
