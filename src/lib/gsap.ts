"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const core = gsap.core as unknown as {
    globals: () => Record<string, unknown>;
};

if (typeof window !== "undefined" && !core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
