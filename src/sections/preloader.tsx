"use client";
import useLoaderStore from "@/lib/stores/loader";
import "@/lib/styles/preloader.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

const Preloader = () => {
    const { setLoaded, setPreloaderShown } = useLoaderStore();

    const [showPreloader, setShowPreloader] = useState(false);

    useEffect(() => {
        // Check if this is a fresh page load or hard refresh
        const navigationEntries = performance.getEntriesByType(
            "navigation",
        ) as PerformanceNavigationTiming[];

        const navigationType = navigationEntries[0]?.type;

        // Check sessionStorage to see if preloader was already shown
        const preloaderShown = sessionStorage.getItem("lzj-preloader-shown");

        // Show preloader only on:
        // 1. First visit (no sessionStorage flag)
        // 2. Hard refresh (reload type)
        // 3. Direct navigation (navigate type without sessionStorage flag)
        const isHardRefresh = navigationType === "reload";
        const isFirstVisit = !preloaderShown;
        const isDirectNavigation =
            navigationType === "navigate" && !preloaderShown;

        if (isHardRefresh || isFirstVisit || isDirectNavigation) {
            setShowPreloader(true);
        } else {
            // Skip preloader, mark as loaded immediately
            setLoaded();
            setPreloaderShown();
        }
    }, [setLoaded, setPreloaderShown]);

    useGSAP(() => {
        if (!showPreloader) return;

        // Create a master timeline
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" }, // Set a global default ease
            onComplete: () => {
                setLoaded();
                setPreloaderShown();
                // Mark in sessionStorage that preloader has been shown
                sessionStorage.setItem("lzj-preloader-shown", "true");
            },
        });

        tl.from(
            ".clip-top, .clip-bottom",
            {
                height: "50vh",
                duration: 2,
                ease: "power2.inOut",
            },
            1,
        ) // Starts at 1s
            .to(
                ".marquee",
                {
                    top: "50%",
                    duration: 2.5,
                },
                0.75,
            ) // Starts at 0.75s

            .from(
                ".clip-top .marquee, .clip-bottom .marquee",
                {
                    left: "100%",
                    duration: 5,
                },
                1,
            ) // Starts at 1s
            .from(
                ".clip-center .marquee",
                {
                    left: "-50%",
                    duration: 5,
                    ease: "power3.inOut",
                },
                1,
            ) // Starts at 1s
            // The Reveal Phase (Everything starts together at 6s)
            .to(
                ".clip-top",
                {
                    clipPath: "inset(0 0 100% 0)",
                },
                6,
            )
            .to(
                ".clip-bottom",
                {
                    clipPath: "inset(100% 0 0 0)",
                    duration: 2,
                },
                6,
            )

            .to(
                ".clip-bottom .marquee, .clip-top .marquee, .clip-center .marquee span",
                {
                    opacity: 0,
                    duration: 1,
                },
                6,
            )
            // The Final Exit
            .to(
                ".loader",
                {
                    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                    duration: 1.2,
                },
                8,
            );
    }, [showPreloader]);

    // Don't render anything if we shouldn't show the preloader
    if (!showPreloader) return null;

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
