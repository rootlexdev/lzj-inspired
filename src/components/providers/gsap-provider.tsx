"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Optional: Global ScrollTrigger defaults
        ScrollTrigger.config({
            ignoreMobileResize: false, // Helps with mobile address bar resizing
        });

        // Ensure all triggers are recalculated if the page layout shifts
        window.addEventListener("load", () => ScrollTrigger.refresh());
    }, []);

    return null;
}
