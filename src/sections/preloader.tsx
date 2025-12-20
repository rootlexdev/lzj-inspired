"use client";
import useLoaderStore from "@/lib/stores/loader";
import "@/lib/styles/preloader.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Preloader = () => {
    const { setLoaded } = useLoaderStore();

    useGSAP(() => {
        // Create a master timeline
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" }, // Set a global default ease
            onComplete: () => {
                setLoaded();
            },
        });

        tl.from(
            ".clip-top, .clip-bottom",
            {
                height: "50vh",
                duration: 2,
                ease: "power2.inOut",
            },
            1
        ) // Starts at 1s

            .to(
                ".marquee",
                {
                    top: "50%",
                    duration: 2.5,
                },
                0.75
            ) // Starts at 0.75s

            .from(
                ".clip-top .marquee, .clip-bottom .marquee",
                {
                    left: "100%",
                    duration: 5,
                },
                1
            ) // Starts at 1s

            .from(
                ".clip-center .marquee",
                {
                    left: "-50%",
                    duration: 5,
                    ease: "power3.inOut",
                },
                1
            ) // Starts at 1s

            // The Reveal Phase (Everything starts together at 6s)
            .to(
                ".clip-top",
                {
                    clipPath: "inset(0 0 100% 0)",
                },
                6
            )

            .to(
                ".clip-bottom",
                {
                    clipPath: "inset(100% 0 0 0)",
                    duration: 2,
                },
                6
            )

            .to(
                ".clip-bottom .marquee, .clip-top .marquee, .clip-center .marquee span",
                {
                    opacity: 0,
                    duration: 1,
                },
                6
            )

            // The Final Exit
            .to(
                ".loader",
                {
                    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                    duration: 1.2,
                },
                8
            );
    });

    return (
        <div className="loader font-bold">
            <div className="loader-clip clip-top">
                <div className="marquee">
                    <div className="marquee-container">
                        <span>LZJ</span>
                        <span>LZJ</span>
                        LZJ
                        <span>LZJ</span>
                        <span>LZJ</span>
                    </div>
                </div>
            </div>
            <div className="loader-clip clip-bottom">
                <div className="marquee">
                    <div className="marquee-container">
                        <span>LZJ</span>
                        <span>LZJ</span>
                        LZJ
                        <span>LZJ</span>
                        <span>LZJ</span>
                    </div>
                </div>
            </div>
            <div className="clip-center">
                <div className="marquee">
                    <div className="marquee-container">
                        <span>LZJ</span>
                        <span>LZJ</span>
                        LZJ
                        <span>LZJ</span>
                        <span>LZJ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
