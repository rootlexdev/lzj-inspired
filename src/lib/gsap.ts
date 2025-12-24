"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const core = gsap.core as unknown as {
    globals: () => Record<string, unknown>;
};

console.log("Here in gsap");
if (typeof window !== "undefined" && !core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

console.log("Registered gsap");

export { gsap, ScrollTrigger };
